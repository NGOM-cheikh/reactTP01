import React from 'react';

function MonHeader() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('fr-FR');
  const formattedTime = now.toLocaleTimeString('fr-FR');

  return (
    <header>
      <h1>Date: {formattedDate}</h1>
      <h2>Heure: {formattedTime}</h2>
    </header>
  );
}

export default MonHeader;
