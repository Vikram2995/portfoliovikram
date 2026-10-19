# Hero Section Text Animation - Implementation Guide

## 🎯 Overview
A fully responsive hero section with smooth text animation using React, Material UI, and Framer Motion. The heading and subheading rotate every 3 seconds with professional fade-in/slide-up and fade-out animations.

---

## 📦 Installation

### Step 1: Install Framer Motion
```bash
npm install framer-motion
```

### Step 2: Verify Installation
```bash
npm list framer-motion
```

---

## ✨ Features Implemented

### 1. **Text Rotation (3-second cycle)**
- Headings cycle through 4 different messages
- Subheadings sync with headings
- Automatic rotation using `setInterval` with `useEffect` cleanup

### 2. **Smooth Animations**
- **Fade-in + Slide-up**: Text enters from below with opacity increase
- **Fade-out + Slide-up**: Text exits upward with opacity decrease
- **Staggered timing**: Subheading starts 100ms after heading for layered effect
- **Duration**: 0.6 seconds per transition (professional pace)

### 3. **Responsive Design**
- Mobile (xs): 1.75rem heading, 0.95rem subheading
- Tablet (sm): 2.5rem heading, 1.1rem subheading
- Desktop (md+): 3rem heading, 1.25rem subheading
- Adaptive spacing, padding, and button sizes

### 4. **Text Content**
```javascript
HEADINGS = [
  "Build Modern Digital Experiences",
  "Transform Ideas Into Reality",
  "Design. Develop. Deliver.",
  "Creating Exceptional User Interfaces",
]

SUBHEADINGS = [
  "We craft responsive and scalable web applications.",
  "Turning innovative concepts into powerful solutions.",
  "User-centric designs with seamless performance.",
  "Building experiences that users love.",
]
```

### 5. **Animation Techniques**
- **Framer Motion AnimatePresence**: Handles exit animations before unmounting
- **Variants**: Predefined animation states (enter, center, exit)
- **Staggered Delay**: Subheading animates after heading
- **Mode="wait"**: Ensures exit animation completes before enter starts

---

## 🎨 Component Structure

### Animation Variants
```javascript
// Heading: Slides up 20px
// Subheading: Slides up 10px (smaller distance)
// Both: Fade in/out with easing
```

### Key Hooks
- **useState**: Tracks current text index (0-3)
- **useEffect**: Sets interval for text rotation, cleans up on unmount

---

## 📱 Responsive Breakpoints

| Breakpoint | Heading Size | Subheading Size | Padding | Gap |
|-----------|-------------|-----------------|---------|-----|
| Mobile    | 1.75rem     | 0.95rem         | 6rem    | 1rem |
| Tablet    | 2.5rem      | 1.1rem          | 8rem    | 1rem |
| Desktop   | 3rem        | 1.25rem         | 13.75rem | 1.5rem |

---

## 🎬 Animation Timeline

1. **Second 0**: Text 1 visible
2. **Second 2.4**: Exit animation begins (0.6s)
3. **Second 3**: Text 2 enters with animation
4. **Repeats**: Every 3 seconds

---

## 🔧 Component Props

The Hero component accepts the following through its parent:
- Inherits `HeroStyle` for background/gradient
- `MACBOOK` image from assets
- Responsive Container from Material UI

---

## 💡 Code Highlights

### Text Rotation Logic
```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % HEADINGS.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);
```

### Animated Box with AnimatePresence
```javascript
<AnimatePresence mode="wait">
  <motion.div
    key={`heading-${currentIndex}`}
    variants={headingVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    {/* Content */}
  </motion.div>
</AnimatePresence>
```

---

## 🚀 Performance Considerations

1. **Memory Leak Prevention**: Interval is cleaned up in useEffect return
2. **Efficient Re-renders**: Only currentIndex state updates
3. **Motion Optimization**: Framer Motion uses GPU acceleration
4. **No Jank**: 60fps animations with smooth easing

---

## 🎯 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## 📝 Customization

### Change Animation Duration
```javascript
// In <motion.div> transition prop
transition={{ duration: 0.8 }} // Slower
transition={{ duration: 0.4 }} // Faster
```

### Change Text Rotation Speed
```javascript
setInterval(() => {
  // Change 3000 to desired milliseconds
  setCurrentIndex((prev) => (prev + 1) % HEADINGS.length);
}, 5000); // Now rotates every 5 seconds
```

### Modify Animation Direction
```javascript
// Current: Slides up (y: 20 to y: 0)
// Change to slide left: x: 20 to x: 0
// Or scale: scale: 0.9 to scale: 1
```

---

## ✅ Testing Checklist

- [x] Text rotates every 3 seconds
- [x] Animations are smooth on desktop
- [x] Responsive on mobile devices
- [x] No memory leaks (interval cleanup)
- [x] Buttons functional
- [x] Macbook image displays correctly
- [x] Gradient text renders properly
- [x] Exit animation completes before next text appears

---

## 📚 Dependencies

```json
{
  "framer-motion": "^latest",
  "@mui/material": "^9.1.1",
  "react": "^19.2.6"
}
```

---

## 🆘 Troubleshooting

### Text not animating?
- Check Framer Motion is installed: `npm list framer-motion`
- Ensure `AnimatePresence` wraps the animated content
- Verify `key` changes with `currentIndex`

### Performance issues?
- Reduce animation duration in transition prop
- Check browser DevTools Performance tab
- Ensure no heavy operations in component

### Responsive issues?
- Test in browser DevTools with different viewport sizes
- Check MUI breakpoints: xs, sm, md, lg, xl
- Adjust sx props if needed

---

## 🎁 Future Enhancements

1. Add pause on hover
2. Manual navigation buttons (next/previous)
3. Dot indicators for current slide
4. Different animation per slide
5. Text direction awareness (RTL support)
6. Accessibility improvements (ARIA labels)

---

Generated: 2026-06-15
Component: Hero.jsx
Status: ✅ Production Ready
