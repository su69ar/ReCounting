"use client";

import { Variants } from "framer-motion";

export const transitions = {
    spring: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 0.8,
    },
    springGentle: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 1,
    },
    springSnappy: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.5,
    },
    ease: {
        type: "tween",
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // Apple-style ease
    },
    easeFast: {
        type: "tween",
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
    },
    easeSlow: {
        type: "tween",
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
    },
} as const;

export const variants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: transitions.ease },
    },
    slideUp: {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: transitions.spring },
    },
    slideDown: {
        hidden: { opacity: 0, y: -16 },
        visible: { opacity: 1, y: 0, transition: transitions.spring },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -16 },
        visible: { opacity: 1, x: 0, transition: transitions.spring },
    },
    slideRight: {
        hidden: { opacity: 0, x: 16 },
        visible: { opacity: 1, x: 0, transition: transitions.spring },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: transitions.spring },
    },
    stagger: {
        visible: {
            transition: {
                staggerChildren: 0.06,
            },
        },
    } as Variants,
};
