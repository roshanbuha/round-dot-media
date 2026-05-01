import './Ticker.css'

const items = [
  'VIDEO EDITING', '✦', 'FILM MAKING', '✦', 'BRANDING', '✦',
  'CONTENT CREATION', '✦', 'COLOR GRADING', '✦', 'MOTION GRAPHICS', '✦',
  'REEL EDITS', '✦', 'BRAND FILMS', '✦', 'SOCIAL ADS', '✦',
]

export default function Ticker() {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className={item === '✦' ? 'ticker-dot' : 'ticker-item'}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
