// src/scripts/scripts.js

export function initializeSlider() {
    const slider = document.getElementById('slider');
    const handle1 = document.getElementById('handle1');
    const handle2 = document.getElementById('handle2');
    const range = document.getElementById('range');
    const minValueDisplay = document.getElementById('min-value');
    const maxValueDisplay = document.getElementById('max-value');

    let isDragging = false;
    let activeHandle;

    let minValue = 0;
    let maxValue = 100000;

    function updateRange() {
        // Update the position of the handles
        handle1.style.left = `${(minValue / 100000) * 100}%`;
        handle2.style.left = `${(maxValue / 100000) * 100}%`;
        
        // Update the width and position of the range
        range.style.left = `${(minValue / 100000) * 100}%`;
        range.style.width = `${((maxValue - minValue) / 100000) * 100}%`;
        
        // Update the displayed values
        minValueDisplay.textContent = `Min: ${minValue}`;
        maxValueDisplay.textContent = `Max: ${maxValue}`;
    }

    function getValueFromEvent(event) {
        const sliderRect = slider.getBoundingClientRect();
        const offsetX = event.clientX - sliderRect.left;
        const percentage = Math.min(Math.max(offsetX / sliderRect.width, 0), 1);
        return Math.round(percentage * 100000); // Convert percentage to value (0-100000)
    }

    function onMouseDown(event) {
        isDragging = true;
        activeHandle = event.target;
    }

    function onMouseMove(event) {
        if (isDragging) {
            const value = getValueFromEvent(event);

            if (activeHandle === handle1) {
                if (value < maxValue) {
                    minValue = value;
                    updateRange();
                }
            } else if (activeHandle === handle2) {
                if (value > minValue) {
                    maxValue = value;
                    updateRange();
                }
            }
        }
    }

    function onMouseUp() {
        isDragging = false;
    }

    handle1.addEventListener('mousedown', onMouseDown);
    handle2.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    // Optional: Allow clicking on the slider to move handles
    slider.addEventListener('click', (event) => {
        const value = getValueFromEvent(event);
        if (event.target !== handle1 && event.target !== handle2) {
            // Move the closest handle
            if (Math.abs(value - minValue) < Math.abs(value - maxValue)) {
                minValue = value;
            } else {
                maxValue = value;
            }
            updateRange();
        }
    });

    updateRange(); // Initial update
}
