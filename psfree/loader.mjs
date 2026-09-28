/*
 * Local PSFree runtime bridge for EdiTzZ PS4 Playground.
 * All exploit, patch and payload resources are resolved locally.
 *
 * IMPORTANT: PSFree's payload runner expects a document-relative path.
 * The launcher lives in /psfree/, therefore payloads are ../payloads/...
 */
const params = new URL(import.meta.url).searchParams;
const requestedPayload = params.get("payload") || "GoldHEN";

const payloads = {
  GoldHEN: "../payloads/GoldHEN/GoldHEN.bin",
  HEN: "../payloads/HEN/HEN.bin",

  FTP: "../payloads/Bins/Tools/ftp.bin",
  App2USB: "../payloads/Bins/Tools/app2usb.bin",
  HistoryBlocker: "../payloads/Bins/Tools/history-blocker.bin",
  BrowserUnlocker: "../payloads/Bins/Tools/enable-browser.bin",

  BackupDB: "../payloads/Bins/Tools/backup.bin",
  RestoreDB: "../payloads/Bins/Tools/restore.bin",
  EnableUpdates: "../payloads/Bins/Tools/enable-updates.bin",
  DisableUpdates: "../payloads/Bins/Tools/disable-updates.bin",

  PS4Debug: "../payloads/Bins/Tools/ps4debug.bin",
  ToDex: "../payloads/Bins/Tools/ToDex.bin",
  ToDev: "../payloads/Bins/Tools/ToDev.bin",
  ToCex: "../payloads/Bins/Tools/ToCex.bin",
  ToKratos: "../payloads/Bins/Tools/ToKratos.bin",
  KernelClock: "../payloads/Bins/Tools/kernel-clock.bin",
  PermanentUART: "../payloads/Bins/Tools/permanent-uart.bin",

  AppDumper: "../payloads/Bins/Dumper/app-dumper.bin",
  KernelDumper: "../payloads/Bins/Dumper/kernel-dumper.bin",
  VTXDumper: "../payloads/Bins/Dumper/ps4-dumper-vtx-900.bin",
  ModuleDumper: "../payloads/Bins/Dumper/module-dumper.bin",

  PSFreeFix: "../payloads/Bins/Tools/ps4-psfree-fix.bin",
  AppCacheInstall: "../payloads/Bins/Tools/appcache-install.bin",

  BinLoader: null,
};

if (requestedPayload === "BinLoader") {
  sessionStorage.setItem("binloader", "1");
} else {
  sessionStorage.removeItem("binloader");

  const selected = payloads[requestedPayload];
  window.payload_path = selected || payloads.GoldHEN;
}

await import("./alert.mjs");
