import React from "react"
import Fab from "@mui/material/Fab"

import Download from "./Download"
import TeiLogo from "./TeiLogo"

const styles = {
  teiFab: {
    position: 'fixed',
    bottom: "1em",
    right: "1em",
    zIndex: 99999,
    padding: "10px",
    "& svg": {
      maxHeight: "60px",
    }
  },
  stopFab: {
    bottom: "150px"
  }
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const EditionFooter = ({children}: Props) => {
  const footerRef = React.useRef<HTMLElement>(null)
  const [stopFab, setStopFab] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset
      const windowSize     = window.innerHeight
      const bodyHeight     = document.body.offsetHeight

      const footerEl = footerRef.current
      const threshold = footerEl ? footerEl.getBoundingClientRect().height : 100

      if (Math.max(bodyHeight - (scrollPosition + windowSize), 0) < threshold) {
        setStopFab(true)
      } else {
        setStopFab(false)
      }
    })
  }, [footerRef])

  const [open, setOpen] = React.useState(false)

  return (<div {...{ ref: footerRef } as any}>
    <Download open={open} close={() => setOpen(false)}/>
    <Fab size="large" color="secondary" aria-label="Show TEI" 
        sx={{
          ...styles.teiFab,
          ...(stopFab && styles.stopFab)
        }}
        onClick={() => setOpen(true)}>
      <TeiLogo/>
    </Fab>
    {children}
  </div>)
}

export default EditionFooter