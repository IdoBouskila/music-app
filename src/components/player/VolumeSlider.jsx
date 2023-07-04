import * as Slider from '@radix-ui/react-slider';

const VolumeSlider = ({ onChange, audioVolume }) => {
    return (
        <Slider.Root
            className="slider-root"
            orientation="vertical"
            min={ 0 }
            step={ 0.1 }
            max={ 1 }
            value={ [audioVolume.isMuted ? 0 : audioVolume.value] }
            onValueChange={ (value) => onChange(value) }
        >
            <Slider.Track className="slider-track">
                <Slider.Range className="slider-range" />
            </Slider.Track>

            <Slider.Thumb className="slider-thumb" />
        </Slider.Root>
    );
};

export default VolumeSlider;