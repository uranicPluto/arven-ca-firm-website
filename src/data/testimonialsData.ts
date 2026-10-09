export interface SimpleTestimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  location: string;
}

export const testimonialsData: SimpleTestimonial[] = [
  {
    id: '1',
    quote: "Professional, responsive and clear. They made our accounting and tax requirements much easier to manage.",
    author: "Rajesh Kulkarni",
    designation: "Managing Director",
    location: "Manufacturing Enterprise, Pune"
  },
  {
    id: '2',
    quote: "Arvén & Co. has been a dependable partner since our incorporation. Their guidance on GST and financial compliance has been invaluable.",
    author: "Pooja Deshpande",
    designation: "Co-Founder",
    location: "Technology Services, Pune"
  },
  {
    id: '3',
    quote: "They explain complex tax matters in straightforward terms and ensure our filings are always handled on time.",
    author: "Sameer Joshi",
    designation: "Business Owner",
    location: "Retail & Distribution, Pune"
  }
];
