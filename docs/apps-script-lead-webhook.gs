const SHEET_NAME = "Leads";

const HEADERS = [
  "submittedAt",
  "project",
  "name",
  "phone",
  "purpose",
  "time",
  "source",
  "pageUrl",
  "referrer",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "msclkid",
  "ip",
  "userAgent",
];

function doGet() {
  return json_({ ok: true, service: "flat4bhk-leads" });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(5000);

  try {
    const body = JSON.parse((e.postData && e.postData.contents) || "{}");
    const attribution = body.attribution || {};
    const sheet = getSheet_();

    sheet.appendRow([
      body.submittedAt || new Date().toISOString(),
      body.project || "",
      body.name || "",
      body.phone || "",
      body.purpose || "",
      body.time || "",
      body.source || "",
      body.pageUrl || "",
      body.referrer || "",
      attribution.utm_source || "",
      attribution.utm_medium || "",
      attribution.utm_campaign || "",
      attribution.utm_content || "",
      attribution.utm_term || "",
      attribution.gclid || "",
      attribution.fbclid || "",
      attribution.msclkid || "",
      body.ip || "",
      body.userAgent || "",
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({
      ok: false,
      error: error && error.message ? error.message : String(error),
    });
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  ensureHeader_(sheet);
  return sheet;
}

function ensureHeader_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeader = HEADERS.every(function (header, index) {
    return firstRow[index] === header;
  });

  if (!hasHeader) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
