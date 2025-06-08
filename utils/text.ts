export function cleanHtml(html: string): string {
  return html
    // alle &nbsp; durch normale Leerzeichen ersetzen
    .replace(/&nbsp;/g, ' ')
    // leere Absätze komplett entfernen (<p>   </p>)
    .replace(/<p>\s*<\/p>/g, '')
    // führende/trailing Leerzeichen weg
    .trim();
}