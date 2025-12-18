import React from "react";

const reviews = [
  {
    id: 1,
    stars: 5,
    name: "Ritu",
    date: "Sep 1, 2025",
    comment:
      "The Workshop was an engaging and knowledge-packed experience. The sessions were interactive, hands-on practice helped clarify concepts, and the Q&A resolved doubts. Certificates and recognition increased motivation. Overall, the workshop flow was balanced — neither boring nor too lengthy. Truly worth attending",
  },
  {
    id: 2,
    stars: 4,
    name: "Ridhi",
    date: "Aug 30, 2025",
    comment:
      "The workshop was an absolute blast! 🤩 The speakers were amazing, the sessions engaging, and the management spot on. The swag and certificates doubled the fun. Every friend said, ‘Bro, totally worth the money!’ We’ll be looking forward to your events and would love to volunteer next time. ❤️",
  },
  {
    id: 3,
    stars: 5,
    name: "Soumya Sharma",
    date: "Aug 31, 2025",
    comment:
      "The workshop was seriously next level 🙌 The speakers explained everything so simply and interestingly that everything became clear. It was so much fun, honestly. Hats off to the core team’s efforts 👏 Certificates, swag, and passes — everything was perfect. Please bring more events like this, we’re always ready.",
  },
  {
    id: 4,
    stars: 4,
    name: "John",
    date: "Sep 6, 2025",
    comment: "the workshop was absolutely awesome!The speakers were amazing, the management, the swags, the certificates — everything was just perfect.I had such a great time! In fact, everyone I had registered for the event said the same thing:Bhai, it was totally worth it!We all enjoyed a lot!Thank you so much for the passes as well! 🙌If you ever need anything in the future, just let me know — my group and I are always ready to help you out.And please do inform us about any upcoming events like this —we’d love to volunteer again! ❤️",
  },
];

function renderStars(count, size = 20) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        style={{
          color: i <= count ? "#f5a623" : "#ccc",
          fontSize: size,
          marginRight: 2,
        }}
      >
        &#9733;
      </span>
    );
  }
  return stars;
}

function ReviewCard({ review }) {
  const firstLetter = review.name.charAt(0).toUpperCase();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 16,
        width: 280,
        background: "#fff",
        marginRight: 16,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0, // prevent shrinking in scroll container
      }}
    >
      <div style={{ marginBottom: 12 }}>{renderStars(review.stars, 20)}</div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#2563eb",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {firstLetter}
        </div>

        <div style={{ fontWeight: "bold", fontSize: 16, color: "#333" }}>
          {review.name}
        </div>
        <div style={{ marginLeft: "auto", fontSize: 12, color: "#999" }}>
          {review.date}
        </div>
      </div>

      <div
        style={{
          fontSize: 12,
          color: "#555",
          lineHeight: 1.4,
          whiteSpace: "normal",
          wordBreak: "break-word",
          width: "100%",
        }}
      >
        {review.comment}
      </div>
    </div>
  );
}

export default function ReviewsWithSidebar() {
  return (
    <div
      style={{
        display: "flex",
        margin: "40px",
        background: "#f7f7f7",
        borderRadius: 10,
        padding: 20,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Side - Summary */}
      <div
        style={{
          flex: "0 0 200px",
          borderRight: "2px solid #ddd",
          paddingRight: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0, marginBottom: 10, color: "#2563eb" }}>
          Our Excellent Review
        </h2>
        <div>{renderStars(5, 30)}</div>
      </div>

      {/* Right Side - One Line Scrollable Reviews */}
      <div
        style={{
          display: "flex",
          overflowX: "auto", // enables horizontal scroll
          paddingLeft: 20,
          scrollbarWidth: "thin",
        }}
      >
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </div>
  );
}
