This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First, install dependencies:
```bash
npm run install
```

First, run the development server:

```bash
# runs local with .env.evelopment file
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Other commands:

```bash
# runs test and lint for validation before pushing
npm run check

# build for production 
npm run build

```

# Technical Documentation: Fleet Monitoring System

## Overview
This project is aimed at developing a web-based application for a transportation company to monitor its fleet in real time. The system includes functionalities for viewing vehicle positions on a map and accessing associated metadata. It also provides visualization tools for analyzing historical data and exporting it for reporting purposes.

## Use Cases

### 1. User Authentication and Authorization
**Description:**  
Provide a secure admin portal with options for signing in and out. Certain pages should be protected and only accessible to authenticated users.

**Actors:**
- Admin users (fleet managers)

**Functionalities:**
- Login and logout functionalities
- Protected pages accessible only after authentication

---

### 2. Dashboard
**Description:**  
Display a dashboard with visualizations for analyzing fleet activity, specifically the kilometers traveled by vehicles over the last 15 days.

**Actors:**
- Admin users

**Functionalities:**
- Provide line chart, histogram, or bar chart (implementation is flexible) summarizing the history of kilometers traveled.
- Include an option to export displayed data in a `.csv` format.

---

### 3. Real-Time Monitoring
**Description:**  
Enable monitoring of vehicles by displaying their real-time positions on a map and providing metadata associated with the vehicles.

**Actors:**
- Admin users

**Functionalities:**
- Display a map with the locations of vehicles based on their GPS coordinates.
- Provide a table listing:
  - Vehicle license plates
  - Corresponding coordinates
- Allow users to select a vehicle from the table, which highlights its position on the map.

---

## Implementation Notes

### Technology Stack
- **Frontend:** React.js or Angular (for building interactive user interfaces)
- **Backend:** Node.js with Express.js or Python with Django/Flask (for server-side functionalities)
- **Database:** PostgreSQL or MongoDB (for storing user data, vehicle metadata, and travel history)
- **Mapping API:** Google Maps API, Mapbox, or similar (for real-time map display)
- **Charts Library:** D3.js, Chart.js, or similar (for rendering visualizations)

### Security Considerations
- Use secure authentication methods such as OAuth or JWT tokens.
- Ensure proper session management and data encryption.

### Deployment
- Deploy using cloud providers like AWS, Azure, or Google Cloud Platform.
- Use CI/CD pipelines for streamlined development and deployment processes.

### Future Enhancements
- Add notifications for specific events (e.g., vehicles entering or leaving designated areas).
- Integrate predictive analytics for vehicle maintenance.

---

## Conclusion
This documentation outlines the primary use cases and technical requirements for the fleet monitoring system. The implementation approach ensures scalability, security, and a user-friendly interface.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
