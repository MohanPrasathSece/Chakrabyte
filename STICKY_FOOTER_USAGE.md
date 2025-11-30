# Sticky Footer and Floating Actions - Usage Guide

## Overview
The `StickyFooterAndActions` component provides a consistent footer and floating action buttons across all pages.

### Features
- **Floating WhatsApp Button** - Green, positioned bottom-right
- **Floating Call Button** - Purple, positioned below WhatsApp
- **Sticky Footer** - Hidden on mobile, visible on desktop with quick links and contact info

## How to Add to Any Page

### Step 1: Import the Component
Add this import at the top of your file:

```tsx
import StickyFooterAndActions from "@/components/StickyFooterAndActions";
```

### Step 2: Add to Your Component
Place it at the end of your JSX, just before the closing `</div>`:

```tsx
const YourPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Your page content here */}
      
      <StickyFooterAndActions />
    </div>
  );
};
```

## Complete Example

```tsx
import StickyFooterAndActions from "@/components/StickyFooterAndActions";
import { Shield } from "lucide-react";

const MyCoursePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20">
        <h1>My Course</h1>
        {/* ... */}
      </section>

      {/* Course Content */}
      <section className="py-20">
        {/* ... */}
      </section>

      {/* Add at the end */}
      <StickyFooterAndActions />
    </div>
  );
};

export default MyCoursePage;
```

## Pages That Need This Component

### ✅ Already Added (Confirmed)
- Home.tsx
- About.tsx
- Contact.tsx
- WebAppSecurity.tsx
- RedTeam.tsx
- BlueTeam.tsx
- MalwareAnalysis.tsx
- CyberForensics.tsx

### 📋 Still Need to Add (5 Course Pages)
1. CybersecurityBasics.tsx
2. EthicalHacking.tsx
3. NetworkSecurity.tsx
4. SOCAnalyst.tsx
5. CloudSecurity.tsx

### 📋 Still Need to Add (Service Pages)
1. VAPT.tsx
2. CorporateTraining.tsx
3. DeviceSecurity.tsx
4. CollegeWorkshops.tsx
5. Consultation.tsx

### 📋 Still Need to Add (Other Pages)
1. Services.tsx
2. Courses.tsx

## Notes
- The component uses `fixed` positioning, so it won't interfere with page layout
- Footer is hidden on mobile (`hidden md:block`) for better mobile UX
- Floating buttons are always visible with responsive sizing
- All links use proper routing with React Router
- Purple theme is consistent across the site

## Contact Information
The component uses:
- **Phone**: +91 98765 43210
- **Email**: info@chakrabyte.com
- **WhatsApp**: https://wa.me/919876543210

To update these, edit the `StickyFooterAndActions.tsx` component file.
