function handleClick(services) {
    // Perform action based on the clicked service
    switch (services) {
        case 'Crop Recommendations':
            console.log('Crop Recommendations clicked');
            // Perform action for Service 1
            break;
        case 'Yield Predictions':
            console.log('Yield Predictions clicked');
            // Perform action for Service 2
            break;
        case 'Data-driven Insights':
            console.log('Data-driven Insights clicked');
            // Perform action for Service 3
            break;
        default:
            console.log('Unknown service clicked');
            break;
    }
}