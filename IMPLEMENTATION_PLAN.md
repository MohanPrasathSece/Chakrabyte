# Remaining Website Improvements - Implementation Plan

## ✅ Completed (Home Page):
1. Full-screen hero section with purple background
2. Better purple/white color balance across sections
3. Services section with purple background
4. Redesigned CTA section

## 🔄 To Be Implemented:

### 3. Add Banners to About & Contact Pages
**Files to modify:**
- `src/pages/About.tsx` - Add hero banner
- `src/pages/Contact.tsx` - Add hero banner

**Implementation:**
- Create reusable PageBanner component
- Add purple background hero sections
- Redesign page layouts to be more engaging

### 4. Redesign Services Page
**File to modify:**
- `src/pages/Services.tsx`

**Changes needed:**
- Update service card design (currently looks simple)
- Add icons and better visual hierarchy
- Improve hover effects and layout

### 5. Individual Course Pages Enhancement
**Files to check/modify:**
- Check existing course detail pages structure
- Add benefits section
- Add duration and key information prominently
- Create horizontal scrolling module section (show modules only on demand)

**For each course:**
- Clear benefits listing
- Course duration
- Prerequisites
- Learning outcomes
- Module breakdown in side-scrolling carousel

### 6. Create Individual Service Detail Pages
**New files to create:**
- `src/pages/services/CorporateTraining.tsx`
- `src/pages/services/CollegeWorkshops.tsx` 
- `src/pages/services/DeviceSecurity.tsx`

**Content for each:**
- Hero banner with service name
- Detailed description
- Benefits and features
- Images showcasing the service
- Pricing/contact CTA
- Image placeholders (to be replaced with actual images)

### 7. Update Routing
**File to modify:**
- `src/App.tsx`

**Add routes for:**
- Service detail pages
- Ensure course detail pages are properly routed

---

## Priority Order:
1. About & Contact banners (Quick win)
2. Services page redesign (Medium effort)
3. Service detail pages (Medium/High effort)
4. Course page enhancements (High effort - multiple pages)

## Notes:
- All new pages should follow the established dark purple & white color scheme
- No gradients, keep it professional
- Use the same typography (Inter/Poppins)
- Ensure mobile responsiveness
- Add proper meta tags for SEO
