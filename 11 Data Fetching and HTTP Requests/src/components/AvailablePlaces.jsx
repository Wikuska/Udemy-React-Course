import { useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
const [avaliablePlaces, setAvaliablePlaces] = useState([])

  return (
    <Places
      title="Available Places"
      places={avaliablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
