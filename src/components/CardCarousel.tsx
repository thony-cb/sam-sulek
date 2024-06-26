"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";
import MainImage from "./MainImage";
import { images } from "@/lib/config";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, Draggable);
const CardCarousel: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null); // Ref for the gallery element
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    let iteration = 0; // Tracks the current iteration of the scroll
    const spacing = 0.1; // Spacing between each image
    const snapTime = gsap.utils.snap(spacing); // Snap function to align to the nearest spacing point
    const cards = gsap.utils.toArray<HTMLLIElement>(".cards li"); // Convert cards to an array
    const playhead = { offset: 0 }; // Proxy object to simulate the playhead position

    // Build the seamless loop animation
    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()); // Wraps the playhead within the duration

    // GSAP tween to smoothly scrub the playhead
    const scrub = gsap.to(playhead, {
      offset: 0,
      onUpdate() {
        seamlessLoop.time(wrapTime(playhead.offset)); // Update the seamless loop time based on playhead offset
        setCurrentImageIndex(getCurrentCardIndex(playhead.offset)); //Update current image index
      },
      duration: 0.5,
      ease: "power3",
      paused: true,
    });

    // ScrollTrigger to handle scrolling interactions
    const trigger = ScrollTrigger.create({
      start: 0,
      onUpdate(self) {
        let scroll = self.scroll();
        if (scroll > self.end - 1) {
          wrap(1, 2); // Wrap forward if scrolled to the end
        } else if (scroll < 1 && self.direction < 0) {
          wrap(-1, self.end - 2); // Wrap backward if scrolled to the start
        } else {
          scrub.vars.offset =
            (iteration + self.progress) * seamlessLoop.duration();
          scrub.invalidate().restart(); // Restart the scrub animation
        }
      },
      end: "+=4000",
      pin: galleryRef.current, // Pin the gallery element
    });

    // Add scrollEnd event listener to snap to the closest item
    ScrollTrigger.addEventListener("scrollEnd", () =>
      scrollToOffset(scrub.vars.offset)
    );

    // Function to scroll to a specific offset
    function scrollToOffset(offset: number) {
      let snappedTime = snapTime(offset),
        progress =
          (snappedTime - seamlessLoop.duration() * iteration) /
          seamlessLoop.duration(),
        scroll = progressToScroll(progress);
      if (progress >= 1 || progress < 0) {
        return wrap(Math.floor(progress), scroll);
      }
      trigger.scroll(scroll);
    }

    // Function to convert progress to a scroll value
    function progressToScroll(progress: number) {
      return gsap.utils.clamp(
        1,
        trigger.end - 1,
        gsap.utils.wrap(0, 1, progress) * trigger.end
      );
    }

    // Function to wrap the scroll position
    function wrap(iterationDelta: number, scrollTo: number) {
      iteration += iterationDelta;
      trigger.scroll(scrollTo);
      trigger.update(); // Update the trigger to reflect the new scroll position
    }

    // Function to build the seamless loop animation
    function buildSeamlessLoop(
      items: HTMLLIElement[],
      spacing: number,
      animateFunc: (element: HTMLLIElement) => gsap.core.Timeline
    ) {
      let rawSequence = gsap.timeline({ paused: true }),
        seamlessLoop = gsap.timeline({
          paused: true,
          repeat: -1, // Infinite repeat for seamless looping
          onRepeat() {
            this._time === this._dur && (this._tTime += this._dur - 0.01);
          },
          onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 100); // Loop backwards seamlessly
          },
        }),
        cycleDuration = spacing * items.length,
        dur!: number;

      // Create the raw sequence by animating each item
      items
        .concat(items)
        .concat(items)
        .forEach((item, i) => {
          let anim = animateFunc(items[i % items.length]);
          rawSequence.add(anim, i * spacing);
          dur || (dur = anim.duration());
        });

      // Animate the playhead linearly for seamless looping
      seamlessLoop.fromTo(
        rawSequence,
        {
          time: cycleDuration + dur / 2,
        },
        {
          time: "+=" + cycleDuration,
          duration: cycleDuration,
          ease: "none",
        }
      );

      return seamlessLoop;
    }

    // Animation function for each item
    function animateFunc(element: HTMLLIElement) {
      const tl = gsap.timeline();
      tl.fromTo(
        element,
        { scale: 1, opacity: 1 },
        {
          scale: 1,

          opacity: 1,
          zIndex: 10,
          duration: 0.5,
          yoyo: false,
          repeat: 1,
          ease: "power1.in",
          immediateRender: false,
        }
      ).fromTo(
        element,
        { xPercent: 600 },
        { xPercent: -600, duration: 1, ease: "none", immediateRender: false },
        0
      );
      return tl;
    }
    function getCurrentCardIndex(offset: any) {
      const totalCards = cards.length;
      const progress = offset / seamlessLoop.duration();
      const index = Math.round(progress * totalCards) % totalCards;
      return index;
    }

    // Draggable instance for dragging functionality
    Draggable.create(".drag-proxy", {
      type: "x",
      trigger: ".cards",
      onPress() {
        this.startOffset = scrub.vars.offset;
      },
      onDrag() {
        scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
        scrub.invalidate().restart();
      },
      onDragEnd() {
        setCurrentImageIndex(getCurrentCardIndex(playhead.offset)); //Update current image index
        scrollToOffset(scrub.vars.offset);
      },
    });

    // Cleanup function to remove event listeners and instances
    return () => {
      ScrollTrigger.killAll();
      const draggableInstances = Draggable.get(".drag-proxy");
      if (Array.isArray(draggableInstances)) {
        draggableInstances.forEach((instance) => instance.kill());
      } else {
        draggableInstances?.kill();
      }
    };
  }, []);

  // JSX structure of the component
  return (
    <div
      ref={galleryRef}
      className="gallery absolute w-full top-0 left-0 flex  h-screen overflow-x-hidden"
    >
      <MainImage ImageIndex={currentImageIndex} />
      <ul className="cards absolute w-[25vw] lg:w-[10vw] aspect-video  top-[80vh] lg:top-[90vh] left-[50%]  -translate-x-1/2 -translate-y-1/2">
        {images.map((image, index) => (
          <li
            key={index}
            className="w-full h-full cursor-grabbing  top-0 left-0 absolute"
          >
            <Image
              className={cn(
                "w-full h-fullobject-cover pointer-events-none",
                currentImageIndex === index ? "   opacity-90 " : "opacity-40"
              )}
              src={image.src}
              width={1280}
              height={720}
              alt={image.alt}
              title={image.title}
            />
          </li>
        ))}
      </ul>
      <div className="active-img-indicator absolute pointer-events-none w-[27vw] lg:w-[11vw] aspect-video top-[80vh] lg:top-[90vh] left-[50%] -translate-x-1/2 -translate-y-1/2 border-white border-[0.05rem] rounded-sm  mix-blend-difference z-[2px]"></div>
      <div className="drag-proxy hidden absolute"></div>
    </div>
  );
};
export default CardCarousel;
