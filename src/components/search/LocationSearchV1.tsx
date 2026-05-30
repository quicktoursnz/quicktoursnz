"use client";
import { useState } from "react";
import { Send, Clock, Users, MapPin, Star, MessageCircle } from "lucide-react";

const LocationSearchV1 = () => {
    const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    groupSize: "",
    children: "",
    preferredDate: "",
    alternativeDate: "",
    destinations: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    alert("Inquiry sent! We'll reply within 2–4 hours.");
  };

  const badges = [
    { icon: <Clock className="w-3.5 h-3.5" />, label: "Any Duration" },
    { icon: <Users className="w-3.5 h-3.5" />, label: "Any Group Size" },
    { icon: <MapPin className="w-3.5 h-3.5" />, label: "Any Destination" },
    { icon: <Star className="w-3.5 h-3.5" />, label: "5-Star Rated" },
    { icon: <MessageCircle className="w-3.5 h-3.5" />, label: "Reply Within 2 hrs" },
  ];
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .tour-section {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f6ff 0%, #ffffff 50%, #e8f2ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .tour-section::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .tour-section::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .tour-inner {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .tour-inner { grid-template-columns: 1fr; gap: 2.5rem; }
        }

        /* LEFT */
        .tour-left {}

        .tour-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #3b82f6;
          margin-bottom: 1.25rem;
        }

        .tour-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 4vw, 3.4rem);
          font-weight: 900;
          color: #0f1f3d;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .tour-headline em {
          font-style: italic;
          color: #3b82f6;
        }

        .tour-desc {
          font-size: 15px;
          font-weight: 300;
          color: #475569;
          line-height: 1.75;
          margin-bottom: 2.5rem;
          max-width: 380px;
        }

        .badge-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: #fff;
          border: 1px solid #dbeafe;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
          color: #1e40af;
          box-shadow: 0 1px 3px rgba(59,130,246,0.08);
          transition: all 0.2s;
        }
        .badge:hover {
          background: #eff6ff;
          border-color: #93c5fd;
          transform: translateY(-1px);
        }

        /* RIGHT - FORM CARD */
        .form-card {
          background: #fff;
          border: 1px solid #e2eaf6;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 8px 48px rgba(59,130,246,0.10), 0 1px 4px rgba(0,0,0,0.04);
        }

        .form-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f1f3d;
          margin-bottom: 4px;
        }

        .form-subtitle {
          font-size: 13px;
          color: #64748b;
          margin-bottom: 1.75rem;
          font-weight: 300;
          line-height: 1.6;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .form-full { grid-column: 1 / -1; }

        .field-label {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 6px;
        }

        .field-required { color: #3b82f6; }

        .field-input, .field-select, .field-textarea {
          width: 100%;
          padding: 10px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #1e293b;
          background: #f8faff;
          border: 1px solid #e2eaf6;
          border-radius: 10px;
          outline: none;
          transition: border 0.18s, box-shadow 0.18s, background 0.18s;
          appearance: none;
          -webkit-appearance: none;
        }

        .field-input::placeholder, .field-textarea::placeholder { color: #b0bfce; }

        .field-input:focus, .field-select:focus, .field-textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.12);
          background: #fff;
        }

        .field-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
          cursor: pointer;
        }

        .field-textarea {
          resize: vertical;
          min-height: 90px;
          line-height: 1.6;
        }

        .field-hint {
          font-size: 11px;
          color: #94a3b8;
          margin-top: 5px;
          font-weight: 300;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
          border: none;
          border-radius: 12px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 6px;
          box-shadow: 0 4px 16px rgba(37,99,235,0.28);
          transition: all 0.2s;
        }

        .submit-btn:hover {
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
          box-shadow: 0 6px 24px rgba(37,99,235,0.36);
          transform: translateY(-1px);
        }

        .submit-btn:active { transform: scale(0.98); }
        .submit-btn:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }

        .form-footer {
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
          margin-top: 14px;
          font-weight: 300;
        }

        .form-footer span { margin: 0 8px; }

        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <section className="tour-section">
        <div className="tour-inner">

          {/* LEFT */}
          <div className="tour-left">
            <p className="tour-eyebrow">Bespoke Private Tours</p>
            <h2 className="tour-headline">
              Want Something <em>Perfectly</em> Tailored?
            </h2>
            <p className="tour-desc">
              No two groups are the same. Tell us your dream and we'll craft a private
              New Zealand adventure built entirely around you — any date, any size, any destination.
            </p>
            <div className="badge-grid">
              {badges.map((b, i) => (
                <span className="badge" key={i}>
                  {b.icon} {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="form-card">
            <h3 className="form-title">Design Your Ideal Journey</h3>
            <p className="form-subtitle">
              Fill in a few details — every answer helps us tailor something truly special.
            </p>

            <div className="form-grid">
              <div>
                <label className="field-label">First Name <span className="field-required">*</span></label>
                <input className="field-input" type="text" placeholder="Jane"
                  value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
              </div>
              <div>
                <label className="field-label">Last Name <span className="field-required">*</span></label>
                <input className="field-input" type="text" placeholder="Smith"
                  value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
              </div>
              <div>
                <label className="field-label">Email Address <span className="field-required">*</span></label>
                <input className="field-input" type="email" placeholder="jane@example.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="field-label">Phone / WhatsApp</label>
                <input className="field-input" type="tel" placeholder="+64 21 000 0000"
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="field-label">Group Size</label>
                <select className="field-select" value={form.groupSize}
                  onChange={e => setForm({ ...form, groupSize: e.target.value })}>
                  <option value="">Select...</option>
                  <option>1–2 people</option>
                  <option>3–5 people</option>
                  <option>6–10 people</option>
                  <option>10+ people</option>
                </select>
              </div>
              <div>
                <label className="field-label">Children / Minors?</label>
                <select className="field-select" value={form.children}
                  onChange={e => setForm({ ...form, children: e.target.value })}>
                  <option value="">Select...</option>
                  <option>None</option>
                  <option>1 child</option>
                  <option>2 children</option>
                  <option>3+ children</option>
                </select>
              </div>
              <div>
                <label className="field-label">Preferred Date <span className="field-required">*</span></label>
                <input className="field-input" type="date"
                  value={form.preferredDate} onChange={e => setForm({ ...form, preferredDate: e.target.value })} />
              </div>
              <div>
                <label className="field-label">Alternative Date</label>
                <input className="field-input" type="date"
                  value={form.alternativeDate} onChange={e => setForm({ ...form, alternativeDate: e.target.value })} />
              </div>
              <div className="form-full">
                <label className="field-label">Destinations of Interest</label>
                <input className="field-input" type="text"
                  placeholder="e.g. Queenstown, Milford Sound, Mt Cook, Wanaka..."
                  value={form.destinations} onChange={e => setForm({ ...form, destinations: e.target.value })} />
                <p className="field-hint">Separate with commas. Not sure? Leave it to us!</p>
              </div>
              <div className="form-full">
                <label className="field-label">Describe Your Ideal Tour <span className="field-required">*</span></label>
                <textarea className="field-textarea"
                  placeholder="e.g. Family of 5 — two teens and a 7-year-old. Milford Sound and Mt Cook over 3 days, easy walks and great food."
                  value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
                <p className="field-hint">The more detail you share, the better we can tailor your experience.</p>
              </div>
            </div>

            <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? (
                <><div className="spinner" /> Sending...</>
              ) : (
                <><Send size={15} /> Send My Inquiry</>
              )}
            </button>

            <p className="form-footer">
              No obligation <span>·</span> Reply within 2–4 hours <span>·</span> 100% private vehicle tours
              <span>Call us: +64 274 733 590</span>
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default LocationSearchV1

