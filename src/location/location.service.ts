import { Injectable } from '@nestjs/common';

import {AddressType, Client, Language, ReverseGeocodingLocationType} from "@googlemaps/google-maps-services-js";
import { RegeoDTO } from './types';

const client = new Client({});

@Injectable()
export class LocationService {

  async regeoOne(regeoDTO: RegeoDTO) {

    const result = await client.reverseGeocode({
      params: {
        latlng: { lat: regeoDTO.lat, lng: regeoDTO.lng },
        language: Language.en,
        key: process.env.GOOGLE_MAPS_API_KEY,
        location_type: [ReverseGeocodingLocationType.ROOFTOP],
        result_type: [AddressType.street_address]
      },
      timeout: 10000, // milliseconds
    })

    return result.data
  }


}
