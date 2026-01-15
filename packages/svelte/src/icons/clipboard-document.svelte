<script lang="ts">
  export let size: number = 28;
  let className: string = '';
  export { className as class };

  let isAnimating = false;
  let isControlled = false;

  export function startAnimation() {
    if (!isControlled) {
      isAnimating = true;
      setTimeout(() => {
        isAnimating = false;
      }, 600);
    }
  }

  export function stopAnimation() {
    isAnimating = false;
  }

  export function setControlled(value: boolean) {
    isControlled = value;
  }

  function handleMouseEnter() {
    if (!isControlled) {
      startAnimation();
    }
  }

  function handleMouseLeave() {
    if (!isControlled) {
      stopAnimation();
    }
  }
</script>

<div
  class={className}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  role="img"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon-svg"
    class:clipboarddocument-animate={isAnimating}
  >
    <path
          d="M8.25 7.5V6.10822C8.25 4.97324 9.09499 4.01015 10.2261 3.91627C10.5994 3.88529 10.9739 3.85858 11.3495 3.83619M15.75 18H18C19.2426 18 20.25 16.9926 20.25 15.75V6.10822C20.25 4.97324 19.405 4.01015 18.2739 3.91627C17.9006 3.88529 17.5261 3.85858 17.1505 3.83619M17.1505 3.83619C16.8672 2.91757 16.0116 2.25 15 2.25H13.5C12.4884 2.25 11.6328 2.91757 11.3495 3.83619M17.1505 3.83619C17.2152 4.04602 17.25 4.26894 17.25 4.5V5.25H11.25V4.5C11.25 4.26894 11.2848 4.04602 11.3495 3.83619" />
        <g>
          <path d="M6.75 7.5H4.875C4.25368 7.5 3.75 8.00368 3.75 8.625V20.625C3.75 21.2463 4.25368 21.75 4.875 21.75H14.625C15.2463 21.75 15.75 21.2463 15.75 20.625V16.5C15.75 11.5294 11.7206 7.5 6.75 7.5Z" />
          <path d="M15.75 18.75V16.875C15.75 15.011 14.239 13.5 12.375 13.5H10.875C10.2537 13.5 9.75 12.9963 9.75 12.375V10.875C9.75 9.01104 8.23896 7.5 6.375 7.5H5.25" />
        </g>
  </svg>
</div>

<style>
  div {
    display: inline-block;
  }

  .icon-svg {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  .icon-svg.clipboarddocument-animate {
    animation: clipboarddocument-animate 0.6s ease-in-out;
  }

  @keyframes clipboarddocument-animate {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
