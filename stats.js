/* ENVÍO ANÓNIMO DE RESPUESTAS (solo si el estudiante acepta). No hay ninguna pantalla pública con datos:
   las respuestas llegan a TU hoja de Google Sheets privada (ver docs/RECOLECCION_GOOGLE_SHEETS.md)
   y las analizas en el panel privado (carpeta PRIVADO_solo_para_mi, que NO se sube a GitHub). */
const COLLECT_URL = "";        // Pega aquí la URL de tu Google Apps Script. Si está vacío, no se guarda ni se envía nada.
const CONSENT_DEFAULT = false; // true = casilla marcada de inicio (solo si el colegio ya tiene autorización de acudientes)
const KEYS = Object.keys(QUESTIONS).flatMap(a => QUESTIONS[a].map((_, i) => a + "_" + i));
const LV = ["var(--g)","var(--y)","var(--o)"];

function toRow(x){ return [x.f, x.asp.join("|"), x.n, x.p, x.al, ...KEYS.map(k => x.r[k] ?? "")]; }
function saveRecord(rec){
  if (!COLLECT_URL) return;
  fetch(COLLECT_URL, {method:"POST", mode:"no-cors", headers:{"Content-Type":"text/plain"}, body:JSON.stringify(toRow(rec))}).catch(() => {});
}
