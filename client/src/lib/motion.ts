export function fadeIn(direction: 'up' | 'down' | 'left' | 'right', delay: number) {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.8,
        delay,
      },
    },
  };
}

export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -60, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.8,
        delay,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 60, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.8,
        delay,
      },
    },
  };
}

export function staggerContainer(staggerChildren: number, delayChildren: number) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

export function scaleIn(delay: number) {
  return {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  };
}
