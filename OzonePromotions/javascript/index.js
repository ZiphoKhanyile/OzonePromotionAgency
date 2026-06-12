// ============================================================
//  OZONE PROMOTIONS — CORE DATA & SHARED UTILITIES
//  Swap these arrays with Supabase calls when DB is ready
// ============================================================

// ── SETTINGS (mirrors system_settings table) ─────────────────
window.SETTINGS = {
  companyName: 'Ozone Beauty Promotions',
  companyEmail: 'ops@ozone.co.za',
  companyPhone: '+27 31 000 1234',
  vatNumber: '4123456789',
  hourlyRate: 65,
  shiftHours: 8,
  overtimeMultiplier: 1.5,
  paymentTermsDays: 5,
  currency: 'ZAR',
  currencySymbol: 'R',
  minPhotosPerShift: 10,
  maxPhotosPerShift: 30,
  lateCheckinThresholdMins: 30,
  checkinRadiusMeters: 200,
  lowStockThresholdPct: 20,
  invoiceOverdueDays: 7,
  invoicePrefix: 'INV-2025-',
  taxRate: 15,
  brandName: 'OZONE',
  defaultShiftStart: '09:00',
  applicationReviewDays: 3,
  maxBookingsPerPromoterPerWeek: 5,
  accentColor: '#00d4ff',
  // Feature flags
  enableGPSVerification: true,
  enableQRCheckin: true,
  enableChatbot: true,
  requireFeedbackBeforeCheckout: true,
  allowPromoterSelfAssign: false,
  autoGenerateInvoices: false,
  requireManagerApproval: true,
  showEarningsToPromoter: true,
  // Notifications
  notifyNewApplication: true,
  notifyBookingResponse: true,
  notifyLowStock: true,
  notifyInvoiceOverdue: true,
  notifyLateCheckin: false,
  notifyDailyReport: true,
  // Lists
  stores: [
    { id:'STR-001', name:'Clicks — Gateway Mall',        retailer:'Clicks',     branch:'Gateway Mall',    address:'1 Palm Blvd, Umhlanga',    town:'Umhlanga',  province:'KwaZulu-Natal', email:'gateway@clicks.co.za',   phone:'031 566 0001' },
    { id:'STR-002', name:'Dis-Chem — Pavilion',          retailer:'Dis-Chem',   branch:'Pavilion',        address:'Pavilion Shopping Centre', town:'Westville', province:'KwaZulu-Natal', email:'pavilion@dischem.co.za', phone:'031 265 0002' },
    { id:'STR-003', name:'Checkers — La Lucia Mall',     retailer:'Checkers',   branch:'La Lucia Mall',   address:'La Lucia Mall, La Lucia',  town:'La Lucia',  province:'KwaZulu-Natal', email:'lalucia@checkers.co.za', phone:'031 562 0003' },
    { id:'STR-004', name:'Pick n Pay — Musgrave Centre', retailer:'Pick n Pay', branch:'Musgrave Centre', address:'Musgrave Centre, Berea',   town:'Durban',    province:'KwaZulu-Natal', email:'musgrave@pnp.co.za',     phone:'031 201 0004' },
    { id:'STR-005', name:'Clicks — Westville',           retailer:'Clicks',     branch:'Westville Mall',  address:'Westville Mall, Westville',town:'Westville', province:'KwaZulu-Natal', email:'westville@clicks.co.za', phone:'031 266 0005' },
  ],
  regions: ['KwaZulu-Natal', 'Gauteng', 'Western Cape', 'Eastern Cape'],
};

// ── MOCK DATA (replace with Supabase queries) ─────────────────

window.PRODUCTS = [
  { id:'P001', name:'Aqua Body Mist 200ml', sku:'OZ-001', category:'Body Care', desc:'Lightweight, long-lasting fragrance mist. Key talking points: 200ml size, affordable luxury, 8-hour scent longevity.', barcode:'8901234567890', status:'active' },
  { id:'P002', name:'Rose Glow Serum 30ml', sku:'OZ-002', category:'Skincare',  desc:'Vitamin C and rosehip blend. Key talking points: brightening, anti-aging, suitable for all skin types.',              barcode:'8901234567891', status:'active' },
];

// Mirrors: bookings table
window.BOOKINGS = [
  { id:'B001', promoter:'Zanele Dlamini', store:'Clicks — Gateway',      date:'2025-06-10', shift:'09:00–17:00', product:'Aqua Body Mist 200ml', status:'confirmed', notes:'Focus on sampling.' },
  { id:'B002', promoter:'Sipho Mokoena',  store:'Dis-Chem — Pavilion',   date:'2025-06-11', shift:'10:00–18:00', product:'Aqua Body Mist 200ml', status:'pending',   notes:'' },
  { id:'B003', promoter:'Ayanda Nkosi',   store:'Checkers — La Lucia',   date:'2025-05-22', shift:'08:00–16:00', product:'Rose Glow Serum 30ml',  status:'declined',  notes:'Stock check first.' },
  { id:'B004', promoter:'Thandeka Zulu',  store:'Pick n Pay — Musgrave', date:'2025-06-14', shift:'09:00–17:00', product:'Aqua Body Mist 200ml', status:'confirmed', notes:'' },
  { id:'B005', promoter:'Zanele Dlamini', store:'Clicks — Westville',    date:'2025-06-17', shift:'10:00–18:00', product:'Rose Glow Serum 30ml',  status:'pending',   notes:'' },
  { id:'B006', promoter:'Sipho Mokoena',  store:'Clicks — Gateway',      date:'2025-05-28', shift:'09:00–17:00', product:'Aqua Body Mist 200ml', status:'confirmed', notes:'' },
  { id:'B007', promoter:'Ayanda Nkosi',   store:'Pick n Pay — Musgrave', date:'2025-05-15', shift:'09:00–17:00', product:'Aqua Body Mist 200ml', status:'confirmed', notes:'' },
];

// Mirrors: attendance_logs table (legacy flat records — kept for reports/photos pages)
window.ATTENDANCE = [
  { promoter:'Zanele Dlamini', store:'Clicks — Gateway',      date:'2025-06-03', checkin:'09:02', checkout:'17:05', gps:'-29.7311, 31.0428', device:'DEV-0042', photos:12, status:'complete'   },
  { promoter:'Sipho Mokoena',  store:'Dis-Chem — Pavilion',   date:'2025-06-03', checkin:'10:08', checkout:'18:00', gps:'-29.8316, 30.8974', device:'DEV-0031', photos:10, status:'complete'   },
  { promoter:'Ayanda Nkosi',   store:'Checkers — La Lucia',   date:'2025-06-02', checkin:'08:15', checkout:'15:50', gps:'-29.7506, 31.0643', device:'DEV-0055', photos:8,  status:'incomplete' },
  { promoter:'Thandeka Zulu',  store:'Pick n Pay — Musgrave', date:'2025-06-02', checkin:'09:00', checkout:'17:00', gps:'-29.8490, 31.0055', device:'DEV-0067', photos:11, status:'complete'   },
  { promoter:'Zanele Dlamini', store:'Clicks — Westville',    date:'2025-05-28', checkin:'10:00', checkout:'18:00', gps:'-29.7800, 30.9100', device:'DEV-0042', photos:13, status:'complete'   },
  { promoter:'Sipho Mokoena',  store:'Clicks — Gateway',      date:'2025-05-28', checkin:'09:05', checkout:'17:10', gps:'-29.7311, 31.0428', device:'DEV-0031', photos:11, status:'complete'   },
];

// ── ACTIVATIONS ───────────────────────────────────────────────
// One activation = one confirmed booking (shift on a specific date at a store).
// Mirrors: bookings + booking_qr_tokens + attendance_logs joined.
//
// Fields:
//   id            — activation reference
//   bookingIds[]  — source booking ID(s)
//   bookingStatus — mirrors bookings.status; only 'confirmed' get QR codes
//   store         — store name (mirrors stores.name)
//   date          — shift date (YYYY-MM-DD)
//   shift         — shift time slot string
//   product       — product being promoted
//   promoters[]   — everyone assigned (the expected roll-call)
//   qrToken       — unique string encoded into the QR code;
//                   mirrors booking_qr_tokens.token
//   scans[]       — populated when a promoter scans on the day;
//                   mirrors attendance_logs (checked_in_at + promoter + device)
//                   Absent = in promoters[] but NOT in scans[]

window.ACTIVATIONS = [
  {
    id:            'ACT-001',
    bookingIds:    ['B001'],
    bookingStatus: 'confirmed',
    store:         'Clicks — Gateway',
    date:          '2025-06-10',
    shift:         '09:00–17:00',
    product:       'Aqua Body Mist 200ml',
    promoters:     ['Zanele Dlamini'],
    qrToken:       'OZ-ACT-001-20250610-CLKGW',
    scans: [
      { promoter:'Zanele Dlamini', time:'09:02', device:'DEV-0042' },
    ],
  },
  {
    id:            'ACT-002',
    bookingIds:    ['B004'],
    bookingStatus: 'confirmed',
    store:         'Pick n Pay — Musgrave',
    date:          '2025-06-14',
    shift:         '09:00–17:00',
    product:       'Aqua Body Mist 200ml',
    promoters:     ['Thandeka Zulu'],
    qrToken:       'OZ-ACT-002-20250614-PNPMS',
    scans:         [], // upcoming — no scan yet
  },
  {
    id:            'ACT-003',
    bookingIds:    ['B006'],
    bookingStatus: 'confirmed',
    store:         'Clicks — Gateway',
    date:          '2025-05-28',
    shift:         '09:00–17:00',
    product:       'Aqua Body Mist 200ml',
    promoters:     ['Sipho Mokoena', 'Zanele Dlamini'],
    qrToken:       'OZ-ACT-003-20250528-CLKGW',
    scans: [
      { promoter:'Sipho Mokoena', time:'09:05', device:'DEV-0031' },
      // Zanele did not scan — she appears as Absent on the attendance page
    ],
  },
  {
    id:            'ACT-004',
    bookingIds:    ['B007'],
    bookingStatus: 'confirmed',
    store:         'Pick n Pay — Musgrave',
    date:          '2025-05-15',
    shift:         '09:00–17:00',
    product:       'Aqua Body Mist 200ml',
    promoters:     ['Ayanda Nkosi'],
    qrToken:       'OZ-ACT-004-20250515-PNPMS',
    scans: [
      { promoter:'Ayanda Nkosi', time:'09:10', device:'DEV-0055' },
    ],
  },
];

// Mirrors: stock_levels table
window.STOCK = [
  { sku:'OZ-001', product:'Aqua Body Mist 200ml', store:'Clicks — Gateway',      qty:42, par:60, barcode:'8901234567890' },
  { sku:'OZ-001', product:'Aqua Body Mist 200ml', store:'Dis-Chem — Pavilion',   qty:25, par:50, barcode:'8901234567890' },
  { sku:'OZ-001', product:'Aqua Body Mist 200ml', store:'Checkers — La Lucia',   qty:3,  par:30, barcode:'8901234567890' },
  { sku:'OZ-001', product:'Aqua Body Mist 200ml', store:'Pick n Pay — Musgrave', qty:17, par:35, barcode:'8901234567890' },
  { sku:'OZ-002', product:'Rose Glow Serum 30ml',  store:'Clicks — Gateway',      qty:18, par:40, barcode:'8901234567891' },
  { sku:'OZ-002', product:'Rose Glow Serum 30ml',  store:'Dis-Chem — Pavilion',   qty:22, par:40, barcode:'8901234567891' },
];

// Mirrors: shift_reports table
window.REPORTS = [
  { promoter:'Zanele Dlamini', store:'Clicks — Gateway',      date:'2025-06-03', rating:'Excellent', customers:'Very positive — many repeat customers observed.',  sales:'~45 units sampled, 12 confirmed purchases', issues:'None'             },
  { promoter:'Sipho Mokoena',  store:'Dis-Chem — Pavilion',   date:'2025-06-03', rating:'Good',      customers:'Interested but price-sensitive.',                  sales:'~30 samples, 8 purchases',                  issues:'Ran low on testers' },
  { promoter:'Thandeka Zulu',  store:'Pick n Pay — Musgrave', date:'2025-06-02', rating:'Good',      customers:'Good foot traffic, younger demographic',           sales:'~50 samples distributed',                   issues:'Signage unclear'    },
  { promoter:'Zanele Dlamini', store:'Clicks — Westville',    date:'2025-05-28', rating:'Excellent', customers:'Highly engaged, asked many product questions.',     sales:'~38 samples, 15 purchases',                 issues:'None'             },
  { promoter:'Sipho Mokoena',  store:'Clicks — Gateway',      date:'2025-05-28', rating:'Good',      customers:'Mixed response, weekend crowd was good.',          sales:'~40 samples, 10 purchases',                 issues:'None'             },
];

// Mirrors: invoices table (legacy simple invoices)
window.INVOICES = [
  { id:'INV-2025-081', client:'Clicks Gateway',      service:'Activation — 8hrs',               amount:3500, date:'2025-06-03', status:'paid'        },
  { id:'INV-2025-082', client:'Dis-Chem Pavilion',   service:'Activation — 8hrs',               amount:3500, date:'2025-06-03', status:'paid'        },
  { id:'INV-2025-083', client:'Checkers La Lucia',   service:'Activation — 6hrs',               amount:2800, date:'2025-06-02', status:'outstanding' },
  { id:'INV-2025-084', client:'Pick n Pay Musgrave', service:'Activation — 8hrs + Stock Check', amount:4200, date:'2025-06-02', status:'paid'        },
  { id:'INV-2025-085', client:'Clicks Gateway',      service:'Activation — 8hrs',               amount:3500, date:'2025-05-28', status:'outstanding' },
  { id:'INV-2025-086', client:'Dis-Chem Pavilion',   service:'Activation — 8hrs',               amount:3500, date:'2025-05-21', status:'paid'        },
  { id:'INV-2025-087', client:'Pick n Pay Musgrave', service:'Activation — 8hrs',               amount:3500, date:'2025-05-14', status:'paid'        },
];

// Mirrors: users + promoter_profiles tables
window.PROMOTERS = [
  { name:'Zanele Dlamini', email:'zanele@ozone.co.za',   phone:'+27 82 345 6789', device:'DEV-0042', region:'KwaZulu-Natal', status:'active',   shifts:24 },
  { name:'Sipho Mokoena',  email:'sipho@ozone.co.za',    phone:'+27 73 456 7890', device:'DEV-0031', region:'KwaZulu-Natal', status:'active',   shifts:18 },
  { name:'Ayanda Nkosi',   email:'ayanda@ozone.co.za',   phone:'+27 84 567 8901', device:'DEV-0055', region:'Gauteng',       status:'active',   shifts:31 },
  { name:'Thandeka Zulu',  email:'thandeka@ozone.co.za', phone:'+27 79 678 9012', device:'DEV-0067', region:'KwaZulu-Natal', status:'active',   shifts:15 },
  { name:'Bongani Cele',   email:'bongani@ozone.co.za',  phone:'+27 61 789 0123', device:'DEV-0078', region:'Western Cape',  status:'inactive', shifts:9  },
];

// Mirrors: applications table
window.APPLICATIONS = [
  { id:'APP-001', firstName:'Lerato',    lastName:'Mokoena', email:'lerato.mokoena@gmail.com',     phone:'+27 72 100 2233', idNumber:'9504125800082', region:'Gauteng',       experience:'1–2 years',               motivation:'I have worked as a beauty advisor at Edgars for 14 months, building strong product knowledge and customer skills. I am passionate about skincare and would love to represent Ozone.', appliedDate:'2025-06-01', status:'pending'  },
  { id:'APP-002', firstName:'Nhlanhla',  lastName:'Sithole', email:'nhlanhla.s@outlook.com',        phone:'+27 63 445 7788', idNumber:'0001015800086', region:'KwaZulu-Natal', experience:'No experience (willing to learn)', motivation:'I am energetic and eager to break into the beauty industry. I have completed a customer service short course and am ready to fully commit to Ozone brand values.',  appliedDate:'2025-06-02', status:'pending'  },
  { id:'APP-003', firstName:'Chantelle', lastName:'Davids',  email:'chantelledavids@webmail.co.za', phone:'+27 84 991 0023', idNumber:'9811155800087', region:'Western Cape',  experience:'3+ years',                motivation:'I spent three years promoting a competitor beauty brand across Cape Town, consistently exceeding sampling targets.',                                                              appliedDate:'2025-05-30', status:'approved' },
  { id:'APP-004', firstName:'Thabo',     lastName:'Nkosi',   email:'thabo.nkosi@gmail.com',         phone:'+27 71 556 8811', idNumber:'9207125800081', region:'KwaZulu-Natal', experience:'Less than 1 year',        motivation:'I completed a retail internship recently and am looking for part-time brand promotion work. Flexible availability.',                                                            appliedDate:'2025-05-28', status:'declined' },
];

// ── SHARED HELPERS ────────────────────────────────────────────
window.OZ = {
  sym: () => window.SETTINGS.currencySymbol,
  shiftPay: () => window.SETTINGS.hourlyRate * window.SETTINGS.shiftHours,

  // Period filter — works on any array with a date string field
  filterByPeriod(arr, dateField, period) {
    const now = new Date();
    return arr.filter(item => {
      const d = new Date(item[dateField]);
      if (period === 'day')   return d.toDateString() === now.toDateString();
      if (period === 'week')  { const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w && d <= now; }
      if (period === 'month') return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      return true; // 'all'
    });
  },

  // Returns [fromDateStr, toDateStr] for Supabase .gte/.lte queries
  getPeriodFilter(period) {
    const now = new Date();
    const fmt = d => d.toISOString().split('T')[0];
    if (period === 'day')   return [fmt(now), fmt(now)];
    if (period === 'week')  { const w = new Date(now); w.setDate(now.getDate() - 7); return [fmt(w), fmt(now)]; }
    if (period === 'month') { const m = new Date(now.getFullYear(), now.getMonth(), 1); return [fmt(m), fmt(now)]; }
    return [null, null]; // 'all'
  },

  // Period tab strip — used across all data pages
  periodTabsHtml(page, renderFn) {
    const p = window['period_' + page] || 'month';
    return `<div class="period-tabs">
      <button class="period-tab${p === 'day'   ? ' active' : ''}" onclick="window['period_${page}']='day';${renderFn}">Day</button>
      <button class="period-tab${p === 'week'  ? ' active' : ''}" onclick="window['period_${page}']='week';${renderFn}">Week</button>
      <button class="period-tab${p === 'month' ? ' active' : ''}" onclick="window['period_${page}']='month';${renderFn}">Month</button>
      <button class="period-tab${p === 'all'   ? ' active' : ''}" onclick="window['period_${page}']='all';${renderFn}">All</button>
    </div>`;
  },

  // Toast notification
  _toastTimer: null,
  toast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
  },

  // Modal helpers
  openModal(id)  { document.getElementById(id)?.classList.add('open');    },
  closeModal(id) { document.getElementById(id)?.classList.remove('open'); },

  // ── SA ID VALIDATOR ──────────────────────────────────────────
  // South African ID: YYMMDD SSSS C A Z
  //   YYMMDD = date of birth
  //   SSSS   = gender (0000–4999 female, 5000–9999 male)
  //   C      = citizenship (0 = SA citizen, 1 = permanent resident)
  //   A      = race (obsolete, always 8)
  //   Z      = Luhn check digit
  validateSAID(id) {
    if (!id || !/^\d{13}$/.test(id.trim())) {
      return { valid: false, error: 'ID number must be exactly 13 digits.' };
    }
    const digits = id.trim();

    const yy = parseInt(digits.substring(0, 2));
    const mm = parseInt(digits.substring(2, 4));
    const dd = parseInt(digits.substring(4, 6));
    if (mm < 1 || mm > 12) return { valid: false, error: 'Invalid birth month in ID number.' };
    if (dd < 1 || dd > 31) return { valid: false, error: 'Invalid birth day in ID number.' };

    const citizenship = parseInt(digits[10]);
    if (citizenship !== 0 && citizenship !== 1) {
      return { valid: false, error: 'Invalid citizenship digit (position 11) in ID number.' };
    }

    // Luhn algorithm
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      let n = parseInt(digits[i]);
      if (i % 2 !== 0) { n *= 2; if (n > 9) n -= 9; }
      sum += n;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    if (checkDigit !== parseInt(digits[12])) {
      return { valid: false, error: 'ID number failed validation check. Please double-check the number.' };
    }

    const year   = yy >= 0 && yy <= 24 ? 2000 + yy : 1900 + yy;
    const gender = parseInt(digits.substring(6, 10)) >= 5000 ? 'Male' : 'Female';
    const dob    = `${dd.toString().padStart(2, '0')}/${mm.toString().padStart(2, '0')}/${year}`;
    return { valid: true, dob, gender, citizenship: citizenship === 0 ? 'SA Citizen' : 'Permanent Resident' };
  },

  // SA ID live feedback — attach to an input element
  attachIDValidator(inputId, feedbackId) {
    const input    = document.getElementById(inputId);
    const feedback = document.getElementById(feedbackId);
    if (!input || !feedback) return;
    input.addEventListener('input', () => {
      const val = input.value.trim();
      if (!val) { feedback.innerHTML = ''; return; }
      if (!/^\d+$/.test(val)) {
        feedback.innerHTML = `<span class="id-feedback-error">⚠ ID must contain digits only</span>`;
        return;
      }
      if (val.length < 13) {
        feedback.innerHTML = `<span class="id-feedback-neutral">${val.length}/13 digits entered…</span>`;
        return;
      }
      const result = window.OZ.validateSAID(val);
      if (result.valid) {
        feedback.innerHTML = `<span class="id-feedback-ok">✓ Valid SA ID · DOB: ${result.dob} · ${result.gender} · ${result.citizenship}</span>`;
        input.dataset.idValid = 'true';
      } else {
        feedback.innerHTML = `<span class="id-feedback-error">✗ ${result.error}</span>`;
        input.dataset.idValid = 'false';
      }
    });
  },
};