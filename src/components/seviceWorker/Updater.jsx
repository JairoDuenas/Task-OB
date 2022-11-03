import React from 'react';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';

const Updater = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props
  return newServiceWorkerDetected ? (
    <div style={{background: "blue", padding: 25, margin: 25}}>
      Nueva versión detectada.
      <button onClick={onLoadNewServiceWorkerAccept}>Actualizar!</button>
    </div>
  ) : null // If no update is available, render nothing
}

export default withServiceWorkerUpdater(Updater);