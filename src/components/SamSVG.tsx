import * as React from "react";

interface SamSVGProps extends React.SVGProps<SVGSVGElement> {}

const SamSVG: React.FC<SamSVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1208}
    height={663}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      stroke="#000"
      d="M11.096 46.475H1.459L1 125.942h1.377l7.801 1.378 6.884 1.378 10.095 1.378 12.39.919 4.131 2.297 4.59 5.053 7.342 7.349 5.047 4.134 8.26 7.809 10.556 9.647 6.883 5.512 8.26 5.512 9.637 7.809 11.932 7.809 9.178 6.431 13.767 8.268 8.26 5.971 10.096 5.053 11.473 6.89 9.178 3.216 20.192 7.809 11.013 2.756 12.391 2.296 12.849 2.297 8.719 3.675 12.391 5.053 16.061 5.971 15.603 5.512 12.391 7.35 3.671 4.593 3.212 6.891 4.589 8.268 7.802 11.024 5.048 6.431 5.047 5.972 6.884 5.971 7.801 6.431 9.637 5.971 9.637 5.513 10.555 3.674 7.343 2.297 12.39 3.215 10.096 1.838 11.473.459 10.095 1.378 1.377 2.756.459 7.35 1.377 6.431-.459 14.24v7.808l2.294 16.537 2.754 16.996 2.294 10.105 5.507 12.403 4.13 11.943 5.507 11.943 5.966 10.565 6.425 11.024 3.671 10.565 5.048 17.455 5.048 16.537 6.424 17.455 5.507 15.618 2.295 7.349 3.212 7.809 5.048 15.618 5.507 11.943 4.589 13.321 3.671 10.565 2.754 7.349 3.212 11.484 1.835 6.431H838.5l.918-5.512 2.294-6.89 3.213-8.269 6.883-12.861 5.507-11.943 5.048-7.35 5.966-11.484 7.342-14.699 8.719-12.402 5.507-11.024 4.13-7.809 5.966-8.268 7.343-9.187 5.506-6.891 5.507-7.349 8.719-11.024 5.966-8.728 5.507-9.187 4.13-6.89 4.13-7.35 4.131-9.187 2.753-8.268 2.294-9.187 1.377-8.727.918-7.809 1.377-3.216 1.835-4.134.918-4.593h5.966l5.966.459 7.342 1.378 5.507.919 12.845 1.837 14.23 1.838h6.88l12.85-.919 10.1-1.838 10.55-2.296 10.1-2.297 8.72-2.756 11.01-3.675 5.05-2.297 11.47-5.512 9.64-4.593 11.47-5.972 9.18-5.053 10.1-5.971 10.55-6.89 9.64-6.431 9.64-5.972 10.09-6.431 10.1-5.971 5.96-4.134 4.13-3.675 2.3-4.134 1.37-3.215.92-6.431v-20.671l.92-3.215v-8.728l-.92-9.646-1.83-7.809-.92-7.809-1.38-12.862-1.37-11.024-3.22-12.402-1.83-5.972-.92-4.134-2.75-6.89-.92-7.35-1.38-6.89-3.67-11.484-4.13-13.321-3.67-7.349-2.3-5.512-6.88-12.403-9.64-19.292-6.42-14.24-2.3-7.35-4.58-11.024-5.51-11.943-4.13-13.321-5.05-8.268-4.59-4.134-3.21-2.297-4.13-4.134-7.8-6.431-11.47-6.89-7.81-4.594-7.8-5.053-13.76-6.89-12.39-5.971-11.48-4.134-7.8-3.216-7.8-2.297h-15.6l-4.13 1.378-5.51 6.431-7.801 11.943-7.343 13.321-5.966 13.321v3.216l1.836 1.837 4.13 3.675.459 1.837-1.836 1.838-3.212 3.675-2.294 4.134v4.134l2.753 5.512 2.753 3.215 4.131 1.378 5.506.46 3.214-.919 3.67-1.837 4.59-.919h5.51l5.04.919 5.05 1.837 5.51 1.838H1043.17l8.72-.46 5.97-.919 6.42-2.296 4.13.918 4.59.92 3.21 2.296 1.84 4.134 4.13 8.268 3.21 8.728 4.59 16.077 4.13 16.536 3.21 18.374.92 10.565-.92 8.268-2.75 9.647-3.21 9.646-2.76 11.484-1.37 6.89-1.38 6.89.46 5.972v21.589l-.92 8.728v5.052l-2.75.919-6.43-1.837-7.8-2.756-7.8-2.757-6.88-3.674-8.26-2.756-9.64-2.756h-24.78l-7.8.918-8.264 1.838-6.424 3.215-3.672 1.837h-3.212l-8.26-2.756-12.85-3.674c-6.271-1.991-18.906-5.972-19.273-5.972-.368 0-8.72-3.062-12.85-4.593l-15.144-4.135-11.013-.459h-15.603l-11.932 1.838-15.143 3.674-11.932 4.134h-3.671l-.459-3.215-.459-5.053-2.294-4.593-4.589-5.972-1.377-2.756-3.671-.919-3.213-1.837-4.589-1.378 1.377-2.297 2.294-2.756 2.295-2.756 3.212-1.837 4.13-.919 1.377-2.297.918-2.756 1.836.46.917 5.512-1.835.918-2.295-.459.459 2.297 2.754 2.297 2.294-1.838.459-2.756v-3.675l-.459-4.134-2.753-1.837-6.425-3.216-2.753-.918-1.836-.919-.918-4.134v-4.594l2.754-1.378 3.671 1.378-.918.919-.459 2.756.459 2.297 2.295-2.297 1.835-3.675-.918-1.837-2.294-1.837-4.13-1.378v-1.838l1.835-2.297 2.295.46 2.294 2.756 2.295 4.134.918 2.756-1.377 4.134-2.295 4.594 2.295 1.378.918-2.297 1.835-3.675 1.377-2.297v-4.134l.459-3.215v-2.297l-3.212-2.297-2.295-4.134V171.877l-.459-2.756-.918-1.378v-5.053l-.917-3.215v-5.513l3.212-.459 4.13-.459 1.836 1.837v3.675l-1.377 3.675-2.753 3.215-.918 2.297h1.835l2.754-3.216 1.835-3.674.918-3.216v-2.756l-3.212-3.215h-10.555l-1.836-2.297-2.753-.919-1.836-1.837-4.589-5.972-5.506-5.052h-2.295l-2.295-1.378v-1.838l1.836-1.837 2.295-2.756 1.835-4.134 2.295-7.35 2.294-6.431.918-6.89.459-5.512 1.377-2.756v-7.81l-1.377-2.755-1.377-4.134v-8.269l-.918-5.512-3.212-7.809-3.671-6.89-4.13-7.35L805 36.83l-5.507-6.43-6.425-6.432-8.26-5.971-9.637-4.134-8.26-2.756-4.13-2.297-.918-3.216-1.377-2.296-3.212-1.378L753.603 1h-4.13l-1.836.919-2.753 1.837-8.72-.919-14.685-.459h-13.308l-5.965.46-9.179 2.755-7.801 3.675-7.801 5.512-7.343 5.513-7.342 8.268-6.884 7.809-9.178 11.024-7.801 10.565-3.671 9.646-2.754 3.675-2.294 4.134-4.59 2.756-5.506 2.756-4.589 3.216-6.425 1.837-2.295 2.756-5.506 1.378-2.295 2.756-4.589 2.756-7.342 2.757-5.966 4.134-3.213 2.756.918 1.378 1.377 1.378 1.836.918 3.212-1.837 2.753-1.837 4.13-.919 3.213.459h1.835l-.917 1.838-5.507 3.215 3.212-.919 4.13-1.837 3.213.919 2.294 2.756v2.756l-2.294.919-2.295 1.378h1.377l3.212-.46 2.754 2.756.458 3.675v7.35l-.458 6.431.917.918.918 4.134.918 5.053v4.594l-1.836 2.296.918 1.838.918 1.378 2.294 1.837 1.377 1.838 1.377-.46-1.377-1.837-2.753-2.756-.918-1.838 1.377-1.378v-4.134l.917-1.837 1.377-2.756.459-1.838-1.377-1.837-.459-1.837 1.377-.46 1.836.46h1.835l.459-.46-1.376-.918-2.295-1.378-1.836-2.757v-3.215l1.377-5.053 1.836-4.134 1.835-1.837 1.377.918.459 5.972v4.593l.918 4.135.918 5.971V145.235l.917 5.053-.917 5.971-4.589 6.431-5.966 5.972-5.048 6.43-4.13 5.972-1.836 5.053.459 5.971 2.295 4.134 4.13 4.135 4.589 1.837h5.507l3.212 1.378.918 1.837-3.213 3.675-.458 4.134 2.753 3.675 4.589 2.756 1.836 1.378v4.594l-7.343 1.837-22.027 5.971h-3.213l-1.835-2.756-15.144-12.402-15.603-9.646-18.356-8.268-13.767-4.594-14.226-2.297h-12.391l-16.52-1.378h-13.308l-12.391 1.378-14.685 2.297-8.719 1.837h-7.342l-14.685-5.512-23.863-8.727-20.192-7.809-17.438-5.053-13.767-2.756h-11.932l-5.966 1.378h-10.555l-14.684-2.756-12.391-6.431-17.897-11.024-25.24-12.403-22.945-6.89-18.815-4.593-17.897-2.297-31.665-8.268-15.603-5.053-27.534-13.78-18.356-7.81-24.322-7.808-8.719-8.728-9.178-9.187-20.65-10.565-12.85-5.053Z"
    />
  </svg>
);
export default SamSVG;
