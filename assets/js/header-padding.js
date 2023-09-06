
    // Function to update the padding values based on viewport height
    function updatePadding() {
        // Get the header element by its ID
        const header = document.getElementById('main-header');

        // Calculate the height of the header
        const headerHeight = header.offsetHeight;

        // Calculate the padding values based on viewport height
        const viewportHeight = window.innerHeight;
        let paddingTopValue;
        let paddingBottomValue;

        if (viewportHeight <= 800) { // Adjust this value as needed for small viewport heights
            paddingTopValue = headerHeight + 50;
            paddingBottomValue = 50; // You can adjust this value for bottom padding
        } else {
            paddingTopValue = 0; // Reset top padding for larger viewport heights
            paddingBottomValue = 0; // Reset bottom padding for larger viewport heights
        }

        const divBelowHeader = document.getElementById('hero-text'); // Replace with the correct ID
        divBelowHeader.style.paddingTop = `${paddingTopValue}px`;
        divBelowHeader.style.paddingBottom = `${paddingBottomValue}px`;
    }

    // Initial call to set the padding based on viewport height
    window.addEventListener('load', updatePadding); // Use 'load' event to ensure all elements are ready

    // Add an event listener to update the padding when the window is resized
    window.addEventListener('resize', updatePadding);

