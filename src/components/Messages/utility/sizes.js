export const KB = 1024;
export const Kb = KB / 8;
export const MB = KB * 1024;
export const Mb = MB / 8;
export const GB = MB * 1024;
export const Gb = GB / 8;

export const GetReadableSize = (size) => {
  if (!isValid(size)) return false;

  if (size >= GB) return `${size / GB | 0} GBytes`;
  if (size >= MB) return `${size / MB | 0} MBytes`;
  if (size >= KB) return `${size / KB | 0} KBytes`;
  return `${size} Bytes`;
}

function isValid(n) {
    if (!(!isNaN(parseFloat(n)) && isFinite(n))) return false;
    if (n < 0) return false;

    return true;
}
