import { MAPBOX_TOKEN } from '@/config/config'
import mapboxgl, { Map } from 'mapbox-gl'
import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { CENTER_LAT, CENTER_LONG } from '../data/coordinates'
import { MarkerType } from '../markers'
import Markers from './markers'
import gsap from 'gsap'

export interface MapInvitation extends mapboxgl.Map {
    markers?: mapboxgl.Marker[]
}

interface MapsProp {
    type: MarkerType
}

function MapsComponent({ type }: MapsProp, ref: ForwardedRef<MapInvitation>) {
    const [map, setMap] = useState<MapInvitation>()

    useEffect(() => {
        const wrapper = document.getElementById('map-invitation')
        if (!wrapper) {
            return
        }

        gsap.set(wrapper, { opacity: 0 })

        mapboxgl.accessToken = MAPBOX_TOKEN

        const map = new Map({
            container: wrapper,
            center: [CENTER_LONG, CENTER_LAT],
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            zoom: 17,
            minZoom: 15.5,
            maxZoom: 20,
            dragRotate: false,
        })

        map.addControl(
            new mapboxgl.NavigationControl({
                showCompass: false,
                showZoom: true,
            }),
            'bottom-right',
        )

        map.rotateTo(30, { duration: 0 })

        map.on('load', () => {
            gsap.to(wrapper, { opacity: 1, duration: 2 })
        })

        setMap(map)

        const resizeObserver = new ResizeObserver(() => {
            map.resize()
        })

        resizeObserver.observe(wrapper)

        return () => {
            resizeObserver.unobserve(wrapper)
            map.remove()
        }
    }, [])

    useImperativeHandle(
        ref,
        () => {
            return map || ({} as any)
        },
        [],
    )

    return (
        <>
            <div className="w-full h-full" id="map-invitation" />
            {map && <Markers map={map} type={type} />}
        </>
    )
}

const Maps = forwardRef(MapsComponent)
export default Maps
