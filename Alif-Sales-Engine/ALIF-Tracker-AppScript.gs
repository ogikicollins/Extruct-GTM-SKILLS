/**
 * ALIF Agency — Master Sales Tracker Builder
 * HOW TO USE:
 * 1. Open a new Google Sheet at sheets.new
 * 2. Click Extensions > Apps Script
 * 3. Delete all existing code, paste this entire script
 * 4. Click Run > buildAlifTracker
 * 5. Approve permissions when prompted
 * 6. Go back to your sheet — the tracker is built
 */

function buildAlifTracker() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.setName("ALIF Sales Tracker — July 2026");

  // Remove default sheets, build fresh
  var existingSheets = ss.getSheets();

  // Create all 4 sheets
  var s1 = ss.getSheetByName("1 - Outreach") || ss.insertSheet("1 - Outreach");
  var s2 = ss.getSheetByName("2 - Conversion") || ss.insertSheet("2 - Conversion");
  var s3 = ss.getSheetByName("3 - Pipeline") || ss.insertSheet("3 - Pipeline");
  var s4 = ss.getSheetByName("Dashboard") || ss.insertSheet("Dashboard");

  // Remove the default "Sheet1" if it exists
  var defaultSheet = ss.getSheetByName("Sheet1");
  if (defaultSheet) ss.deleteSheet(defaultSheet);

  // Tab colors
  s1.setTabColor("#1F3864");
  s2.setTabColor("#375623");
  s3.setTabColor("#C55A11");
  s4.setTabColor("#7030A0");

  buildOutreach(s1);
  buildConversion(s2);
  buildPipeline(s3);
  buildDashboard(s4, ss);

  // Activate Sheet 1
  ss.setActiveSheet(s1);
  SpreadsheetApp.getUi().alert("ALIF Sales Tracker built successfully!\n\nShare with:\n- Kaya Geha (editor)\n- Amir (viewer)\n- Milan (viewer)");
}

// ─── COLORS ───────────────────────────────────────────────
var NAVY    = "#1F3864";
var BLUE    = "#2E75B6";
var BAND    = "#D6E4F0";
var SUB     = "#BDD7EE";
var YELLOW  = "#FFF2CC";
var GREY    = "#F3F3F3";
var WHITE   = "#FFFFFF";
var GREEN   = "#E2EFDA";
var AMBER   = "#FFF2CC";
var RED     = "#FFE0E0";
var DKTEXT  = "#1F3864";

// ─── HELPERS ──────────────────────────────────────────────
function hdr(sheet, row, col, text, bg, fg) {
  bg = bg || NAVY; fg = fg || "#FFFFFF";
  var cell = sheet.getRange(row, col);
  cell.setValue(text).setBackground(bg).setFontColor(fg)
      .setFontWeight("bold").setWrap(true)
      .setHorizontalAlignment("center").setVerticalAlignment("middle");
  return cell;
}

function inp(sheet, row, col, value, fmt) {
  var cell = sheet.getRange(row, col);
  cell.setValue(value !== undefined ? value : "")
      .setBackground(YELLOW).setHorizontalAlignment("right");
  if (fmt) cell.setNumberFormat(fmt);
  return cell;
}

function fml(sheet, row, col, formula, fmt, bg) {
  bg = bg || GREY;
  var cell = sheet.getRange(row, col);
  cell.setFormula(formula).setBackground(bg)
      .setHorizontalAlignment("right");
  if (fmt) cell.setNumberFormat(fmt);
  return cell;
}

function title(sheet, row, c1, c2, text, bg, fg) {
  bg = bg || NAVY; fg = fg || "#FFFFFF";
  sheet.getRange(row, c1, 1, c2 - c1 + 1).merge()
       .setValue(text).setBackground(bg).setFontColor(fg)
       .setFontWeight("bold").setFontSize(13)
       .setHorizontalAlignment("center").setVerticalAlignment("middle");
  sheet.setRowHeight(row, 30);
}

function band(sheet, row, c1, c2, text, bg, fg) {
  bg = bg || BLUE; fg = fg || "#FFFFFF";
  sheet.getRange(row, c1, 1, c2 - c1 + 1).merge()
       .setValue(text).setBackground(bg).setFontColor(fg)
       .setFontWeight("bold").setHorizontalAlignment("left")
       .setVerticalAlignment("middle");
  sheet.setRowHeight(row, 20);
}

function subtotalLabel(sheet, row, c1, c2, text) {
  sheet.getRange(row, c1, 1, c2 - c1 + 1).merge()
       .setValue(text).setBackground(SUB).setFontColor(DKTEXT)
       .setFontWeight("bold").setHorizontalAlignment("left");
  sheet.setRowHeight(row, 20);
}

function weekDate(weekNum) {
  // W1 starts 07 Jul 2026
  var base = new Date(2026, 6, 7); // July 7
  var d = new Date(base.getTime() + (weekNum - 1) * 7 * 86400000);
  return d;
}

function formatDate(d) {
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return ("0"+d.getDate()).slice(-2) + " " + months[d.getMonth()] + " " + d.getFullYear();
}

function colLetter(n) {
  var s = "";
  while (n > 0) {
    var r = (n - 1) % 26;
    s = String.fromCharCode(65 + r) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

// ─── SHEET 1: OUTREACH ────────────────────────────────────
function buildOutreach(s) {
  s.clear();
  s.clearFormats();

  // Columns: A=Date,B=Week,C=Day,D=Region,E=Emails,F=Open%,G=Reply%,
  //          H=PosReply%,I=PosReplies,J=Calls,K=Convos,L=AnswerRate,
  //          M=LIConnect,N=LIReply,O=WA,P=Touches,Q=Notes
  var widths = [95,55,55,75,85,80,80,90,90,80,90,90,90,85,110,100,220];
  for (var c = 1; c <= 17; c++) s.setColumnWidth(c, widths[c-1]);

  // Row 1: Title
  title(s, 1, 1, 17, "ALIF AGENCY — OUTREACH TRACKER  |  Weekly + Daily Metrics", NAVY);

  // Row 2: Targets
  s.getRange(1, 1, 1, 17).setRowHeight && s.setRowHeight(2, 18);
  var tgtRow = s.getRange(2, 1, 1, 17);
  tgtRow.setBackground(BLUE).setFontColor("#FFFFFF").setFontWeight("bold");
  var tgts = ["TARGETS:","","","","300+/wk",">35%",">5%",">3%","","80/day",">15%","","100+/wk","","","",""];
  tgtRow.setValues([tgts]);

  // Row 3: Headers
  var heads = ["DATE","WEEK","DAY","REGION","EMAILS\nSENT","OPEN\nRATE %","REPLY\nRATE %","POS\nREPLY %",
               "POS\nREPLIES","CALLS\nMADE","CONVOS","ANSWER\nRATE %","LI\nCONNECTS",
               "LI\nREPLIES","WHATSAPP\nMENA","TOTAL\nTOUCHES","NOTES"];
  for (var c = 1; c <= 17; c++) hdr(s, 3, c, heads[c-1]);
  s.setRowHeight(3, 42);

  var days = ["Mon","Tue","Wed","Thu","Fri"];
  var row = 4;

  for (var w = 1; w <= 12; w++) {
    var wStart = weekDate(w);
    var wEnd   = new Date(wStart.getTime() + 4 * 86400000);
    var wLabel = "WEEK " + w + "   |   " + formatDate(wStart) + "  —  " + formatDate(wEnd);
    band(s, row, 1, 17, wLabel, BLUE);
    row++;

    var dayRows = [];
    for (var d = 0; d < 5; d++) {
      var dt = new Date(wStart.getTime() + d * 86400000);
      dayRows.push(row);

      // Date
      s.getRange(row, 1).setValue(dt).setNumberFormat("dd/mm/yyyy")
       .setBackground(YELLOW).setHorizontalAlignment("center");
      // Week
      s.getRange(row, 2).setValue("W"+w).setBackground(YELLOW)
       .setHorizontalAlignment("center");
      // Day
      s.getRange(row, 3).setValue(days[d]).setBackground(YELLOW)
       .setHorizontalAlignment("center");
      // Region (with dropdown)
      var regionCell = s.getRange(row, 4);
      regionCell.setValue("ALL").setBackground(YELLOW).setHorizontalAlignment("center");
      var rule = SpreadsheetApp.newDataValidation()
        .requireValueInList(["MENA","EU","US","ALL"], true).build();
      regionCell.setDataValidation(rule);

      // Input cells: count columns
      [5,9,10,11,13,14,15].forEach(function(c) { inp(s, row, c, 0, "#,##0"); });
      // Input cells: percent columns
      [6,7,8].forEach(function(c) { inp(s, row, c, 0, "0.0%"); });
      // Notes
      s.getRange(row, 17).setBackground(WHITE);

      // Formulas
      var er = row;
      fml(s, row, 12, "=IF(J"+er+"=0,\"\",K"+er+"/J"+er+")", "0.0%");
      fml(s, row, 16, "=IF(SUM(E"+er+",J"+er+",M"+er+",N"+er+",O"+er+")=0,\"\",SUM(E"+er+",J"+er+",M"+er+",N"+er+",O"+er+"))", "#,##0");

      s.setRowHeight(row, 20);
      row++;
    }

    // Subtotal row
    var r0 = dayRows[0], r4 = dayRows[4];
    subtotalLabel(s, row, 1, 3, "WEEK " + w + "  TOTAL");
    [5,9,10,11,13,14,15,16].forEach(function(c) {
      var cl = colLetter(c);
      fml(s, row, c, "=SUM("+cl+r0+":"+cl+r4+")", "#,##0", SUB);
    });
    [6,7,8,12].forEach(function(c) {
      var cl = colLetter(c);
      fml(s, row, c, "=IFERROR(AVERAGEIF("+cl+r0+":"+cl+r4+",\">0\"),\"\")", "0.0%", SUB);
    });
    s.getRange(row, 4).setBackground(SUB);
    s.getRange(row, 17).setBackground(SUB);
    s.setRowHeight(row, 20);
    row++;

    // Spacer
    s.setRowHeight(row, 6);
    row++;
  }

  // Freeze rows 1-3
  s.setFrozenRows(3);

  // Conditional formatting on col L (Answer Rate) - bonus
  // Skip for now to keep it clean
}

// ─── SHEET 2: CONVERSION ──────────────────────────────────
function buildConversion(s) {
  s.clear();
  s.clearFormats();

  var widths = [55,110,100,105,105,95,100,90,90,100,95,100,100,100,100,100,110,220];
  for (var c = 1; c <= 18; c++) s.setColumnWidth(c, widths[c-1]);

  // Title
  title(s, 1, 1, 18, "ALIF AGENCY — CONVERSION LAYER  |  Weekly Funnel Metrics", NAVY);

  // Targets
  var tgts2 = ["TARGETS:","","","",">10%","",">70%","",">50%","","","","","",">30%","","",""];
  s.getRange(2, 1, 1, 18).setValues([tgts2])
   .setBackground(BLUE).setFontColor("#FFFFFF").setFontWeight("bold");
  s.setRowHeight(2, 18);

  // Headers
  var heads2 = ["WEEK","WEEK\nSTART","POS\nREPLIES","MTGS\nBOOKED","REPLY\nBOOK %","MTGS\nHELD",
                "SHOW\nRATE %","NO-\nSHOWS","RECOV-\nERED","RECOV\n%","DISCO\nHELD",
                "QUAL\n4.0+","QUAL\nRATE %","PROPS\nSENT","PROPS\nWON","WIN\nRATE %","NEW MRR\n(AED)","NOTES"];
  for (var c = 1; c <= 18; c++) hdr(s, 3, c, heads2[c-1]);
  s.setRowHeight(3, 50);

  var sd2 = new Date(2026, 6, 7);

  for (var w = 1; w <= 12; w++) {
    var r = w + 3;
    var wdt = new Date(sd2.getTime() + (w-1) * 7 * 86400000);
    var bg = (w % 2 === 0) ? BAND : WHITE;

    s.getRange(r, 1).setValue("W"+w).setBackground(bg)
     .setFontWeight("bold").setHorizontalAlignment("center");
    s.getRange(r, 2).setValue(wdt).setNumberFormat("dd/mm/yyyy").setBackground(bg);

    // Input columns
    [3,4,6,8,9,11,12,14,15,17].forEach(function(c) { inp(s, r, c, 0, "#,##0"); });
    s.getRange(r, 18).setBackground(WHITE);

    // Formula columns
    fml(s, r, 5,  "=IF(C"+r+"=0,\"\",D"+r+"/C"+r+")", "0.0%");
    fml(s, r, 7,  "=IF(D"+r+"=0,\"\",F"+r+"/D"+r+")", "0.0%");
    fml(s, r, 10, "=IF(H"+r+"=0,\"\",I"+r+"/H"+r+")", "0.0%");
    fml(s, r, 13, "=IF(K"+r+"=0,\"\",L"+r+"/K"+r+")", "0.0%");
    fml(s, r, 16, "=IF(N"+r+"=0,\"\",O"+r+"/N"+r+")", "0.0%");

    s.setRowHeight(r, 22);
  }

  // Totals row (row 16)
  var tr = 16;
  s.getRange(tr, 1, 1, 2).merge().setValue("12-WEEK TOTAL / AVG")
   .setBackground(SUB).setFontColor(DKTEXT).setFontWeight("bold")
   .setHorizontalAlignment("left");

  [3,4,6,8,9,11,12,14,15,17].forEach(function(c) {
    var cl = colLetter(c);
    fml(s, tr, c, "=SUM("+cl+"4:"+cl+"15)", "#,##0", SUB);
  });
  [5,7,10,13,16].forEach(function(c) {
    var cl = colLetter(c);
    fml(s, tr, c, "=IFERROR(AVERAGEIF("+cl+"4:"+cl+"15,\">0\"),\"\")", "0.0%", SUB);
  });
  s.setRowHeight(tr, 24);

  // Conditional formatting: Col E (Reply->Book %)
  var cfRules = [];
  var rangeE = s.getRange("E4:E15");

  cfRules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(0.03).setBackground(RED).setRanges([rangeE]).build());
  cfRules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween(0.03, 0.0999).setBackground(AMBER).setRanges([rangeE]).build());
  cfRules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThanOrEqualTo(0.10).setBackground(GREEN).setRanges([rangeE]).build());

  // Col G (Show Rate)
  var rangeG = s.getRange("G4:G15");
  cfRules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(0.50).setBackground(RED).setRanges([rangeG]).build());
  cfRules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween(0.50, 0.6999).setBackground(AMBER).setRanges([rangeG]).build());
  cfRules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThanOrEqualTo(0.70).setBackground(GREEN).setRanges([rangeG]).build());

  // Col P (Win Rate)
  var rangeP = s.getRange("P4:P15");
  cfRules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(0.20).setBackground(RED).setRanges([rangeP]).build());
  cfRules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween(0.20, 0.2999).setBackground(AMBER).setRanges([rangeP]).build());
  cfRules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThanOrEqualTo(0.30).setBackground(GREEN).setRanges([rangeP]).build());

  s.setConditionalFormatRules(cfRules);
  s.setFrozenRows(3);
}

// ─── SHEET 3: PIPELINE ────────────────────────────────────
function buildPipeline(s) {
  s.clear();
  s.clearFormats();

  var widths = [55,110,155,145,120,120,140,110,130,120,115,100,100,130,150,220];
  for (var c = 1; c <= 16; c++) s.setColumnWidth(c, widths[c-1]);

  // Title
  title(s, 1, 1, 16, "ALIF AGENCY — PIPELINE VALUE TRACKER  |  Weekly Stage Breakdown (AED)", NAVY);

  // Headers
  var heads3 = ["WEEK","WEEK\nSTART","TOTAL\nPIPELINE (AED)","POS REPLY\nSTAGE (AED)",
                "MTG\nBOOKED","MTG\nHELD","PROPOSAL\nSENT (AED)","VERBAL\nYES (AED)",
                "AVG DEAL\n(AED)","AVG AGE\n(DAYS)","STALLED\n7D+","DEALS\nWON",
                "DEALS\nLOST","NEW MRR\n(AED)","CUMUL\nMRR (AED)","NOTES"];
  for (var c = 1; c <= 16; c++) hdr(s, 2, c, heads3[c-1]);
  s.setRowHeight(2, 55);

  var sd3 = new Date(2026, 6, 7);
  var AED_FMT = '"AED "#,##0';

  for (var w = 1; w <= 12; w++) {
    var r = w + 2;
    var wdt = new Date(sd3.getTime() + (w-1) * 7 * 86400000);
    var bg = (w % 2 === 0) ? BAND : WHITE;

    s.getRange(r, 1).setValue("W"+w).setBackground(bg)
     .setFontWeight("bold").setHorizontalAlignment("center");
    s.getRange(r, 2).setValue(wdt).setNumberFormat("dd/mm/yyyy").setBackground(bg);

    // Input: stage values D–H
    [4,5,6,7,8].forEach(function(c) { inp(s, r, c, 0, AED_FMT); });
    // Input: other columns
    inp(s, r, 9,  0, AED_FMT);  // avg deal
    inp(s, r, 10, 0, "#,##0");  // avg age
    inp(s, r, 11, 0, "#,##0");  // stalled
    inp(s, r, 12, 0, "#,##0");  // won
    inp(s, r, 13, 0, "#,##0");  // lost
    inp(s, r, 14, 0, AED_FMT);  // new MRR
    s.getRange(r, 16).setBackground(WHITE);

    // Total pipeline formula
    fml(s, r, 3, "=SUM(D"+r+":H"+r+")", AED_FMT);

    // Cumulative MRR
    if (w === 1) {
      fml(s, r, 15, "=N"+r, AED_FMT);
    } else {
      var pr = r - 1;
      fml(s, r, 15, "=O"+pr+"+N"+r, AED_FMT);
    }

    s.setRowHeight(r, 22);
  }

  // Summary row (row 15)
  var tr3 = 15;
  s.getRange(tr3, 1, 1, 2).merge().setValue("12-WEEK SUMMARY")
   .setBackground(SUB).setFontColor(DKTEXT).setFontWeight("bold")
   .setHorizontalAlignment("left");
  [11,12,13].forEach(function(c) {
    var cl = colLetter(c);
    fml(s, tr3, c, "=SUM("+cl+"3:"+cl+"14)", "#,##0", SUB);
  });
  fml(s, tr3, 14, "=SUM(N3:N14)", AED_FMT, SUB);
  fml(s, tr3, 15, "=O14", AED_FMT, SUB);
  s.setRowHeight(tr3, 24);

  s.setFrozenRows(2);
}

// ─── SHEET 4: DASHBOARD ───────────────────────────────────
function buildDashboard(s, ss) {
  s.clear();
  s.clearFormats();

  s.setColumnWidth(1, 300);
  s.setColumnWidth(2, 160);
  s.setColumnWidth(3, 220);
  s.setColumnWidth(4, 20);
  s.setColumnWidth(5, 300);
  s.setColumnWidth(6, 160);

  // Title
  title(s, 1, 1, 6, "ALIF AGENCY — HEAD OF SALES DASHBOARD", NAVY);
  s.getRange(1,1,1,6).setFontSize(15);
  s.getRange(2, 1, 1, 6).merge()
   .setValue("Auto-calculated from all sheets. Do not type in this sheet directly.")
   .setBackground(BLUE).setFontColor("#FFFFFF").setFontStyle("italic")
   .setHorizontalAlignment("center");
  s.setRowHeight(2, 20);

  var row = 4;

  function dashSection(r, label) {
    s.getRange(r, 1, 1, 6).merge()
     .setValue("  " + label).setBackground(BLUE).setFontColor("#FFFFFF")
     .setFontWeight("bold").setFontSize(11).setHorizontalAlignment("left");
    s.setRowHeight(r, 24);
    return r + 1;
  }

  function dashRow(r, label, formula, target, numFmt) {
    var bg = (r % 2 === 0) ? BAND : WHITE;
    s.getRange(r, 1).setValue(label).setBackground(bg).setFontColor(DKTEXT);
    if (formula) {
      var cell = s.getRange(r, 2);
      cell.setFormula(formula).setBackground(GREY).setHorizontalAlignment("right");
      if (numFmt) cell.setNumberFormat(numFmt);
    }
    s.getRange(r, 3).setValue(target).setBackground(bg)
     .setFontColor("#595959").setFontStyle("italic");
    s.setRowHeight(r, 20);
    return r + 1;
  }

  // Outreach section
  row = dashSection(row, "OUTREACH — 12-WEEK TOTALS");
  row = dashRow(row, "Total Positive Replies", "='2 - Conversion'!C16", "All channels combined", "#,##0");
  row = dashRow(row, "Total Meetings Booked", "='2 - Conversion'!D16", "Target: 60+ over 12 weeks", "#,##0");
  row = dashRow(row, "Total Proposals Sent", "='2 - Conversion'!N16", "—", "#,##0");
  s.setRowHeight(row, 8); row++;

  // Conversion section
  row = dashSection(row, "CONVERSION — 12-WEEK AVERAGES");
  row = dashRow(row, "Avg Reply to Booking Rate", "='2 - Conversion'!E16", "TARGET: 10%  ← FIX THIS FIRST", "0.0%");
  row = dashRow(row, "Avg Show Rate", "='2 - Conversion'!G16", "Target: 70%", "0.0%");
  row = dashRow(row, "Avg No-Show Recovery Rate", "='2 - Conversion'!J16", "Target: 50%", "0.0%");
  row = dashRow(row, "Avg Qualification Rate", "='2 - Conversion'!M16", "Target: 80%", "0.0%");
  row = dashRow(row, "Avg Proposal Win Rate", "='2 - Conversion'!P16", "Target: 30%", "0.0%");
  s.setRowHeight(row, 8); row++;

  // Pipeline section
  row = dashSection(row, "PIPELINE — 12-WEEK TOTALS");
  row = dashRow(row, "Proposals Won", "='2 - Conversion'!O16", "—", "#,##0");
  row = dashRow(row, "Total Deals Won", "='3 - Pipeline'!L15", "—", "#,##0");
  row = dashRow(row, "Total Deals Lost", "='3 - Pipeline'!M15", "—", "#,##0");
  row = dashRow(row, "Total New MRR Added (AED)", "='3 - Pipeline'!N15", "—", '"AED "#,##0');
  row = dashRow(row, "Cumulative MRR at Week 12 (AED)", "='3 - Pipeline'!O14", "Month 12 balance", '"AED "#,##0');
  s.setRowHeight(row, 8); row++;

  // Funnel ratios
  row = dashSection(row, "THE 5 FUNNEL RATIOS COLLINS TRACKS EVERY MONDAY");
  row = dashRow(row, "1. Positive Reply → Booking %", "='2 - Conversion'!E16", "TARGET 10%  ← THE NUMBER TO FIX", "0.0%");
  row = dashRow(row, "2. Booked → Held (Show Rate)", "='2 - Conversion'!G16", "Target: 70%", "0.0%");
  row = dashRow(row, "3. Held → Qualified", "='2 - Conversion'!M16", "Target: 80%", "0.0%");
  row = dashRow(row, "4. Qualified → Proposal Sent", "=IFERROR('2 - Conversion'!N16/'2 - Conversion'!L16,\"\")", "Aim: 90%+", "0.0%");
  row = dashRow(row, "5. Proposal → Closed Won", "='2 - Conversion'!P16", "Target: 30%", "0.0%");
  s.setRowHeight(row, 8); row++;

  // Instructions
  row = dashSection(row, "HOW TO USE THIS TRACKER");
  var instrs = [
    ["Sheet 1 - Outreach", "Fill YELLOW cells daily Mon–Fri. Grey = auto-calculated (answer rate, total touches)."],
    ["Sheet 2 - Conversion", "Fill YELLOW cells every Monday with the previous week totals. Rates auto-calculate."],
    ["Sheet 3 - Pipeline", "Enter AED values by stage every Monday. Total pipeline + cumulative MRR build automatically."],
    ["Dashboard", "Reads all three sheets. Never type here directly."],
    ["Apex Integration", "Pull Apex weekly report. Map email sends → Sheet 1 Col E, bookings → Sheet 2 Col D."],
    ["THE ONE METRIC", "Reply-to-Booking % (Sheet 2 Col E). Baseline: 0.2%. Target: 10%+."]
  ];
  instrs.forEach(function(inst) {
    s.getRange(row, 1).setValue(inst[0]).setBackground(SUB)
     .setFontColor(DKTEXT).setFontWeight("bold");
    s.getRange(row, 2, 1, 5).merge().setValue(inst[1])
     .setBackground(BAND).setFontColor(DKTEXT).setWrap(true);
    s.setRowHeight(row, 22);
    row++;
  });

  s.setFrozenRows(2);
}
