import * as alt from 'alt';
import * as native from 'natives';

let vehicle = null;
let currentSpeed = null;
let speedLimit = null;
let plusMinusStep = 5;

alt.on('keydown', (key) => {
    vehicle = alt.Player.local.vehicle;
    if (vehicle) speedLimit = vehicle.getMeta('speedLimit');
    switch (key) {
        case 76:
            if (vehicle) {
                currentSpeed = parseInt((native.getEntitySpeed(vehicle.scriptID) * 3.6).toFixed(0));
                speedLimit = !speedLimit ? parseFloat(currentSpeed / 3.6) : null;
                setVehicleSpeedLimit(vehicle, speedLimit);
            }
            break;
        case 107:
            if (speedLimit) {
                speedLimit += parseFloat(plusMinusStep / 3.6);
                setVehicleSpeedLimit(vehicle, speedLimit);
            }
            break;
        case 109:
            if (speedLimit) {
                speedLimit -= parseFloat(plusMinusStep / 3.6);
                setVehicleSpeedLimit(vehicle, speedLimit);
            }
            break;
        default:
            break;
    }
});

function setVehicleSpeedLimit(vehicle, speedLimit) {
    let setSpeedLimit = speedLimit !== null ? speedLimit : 1000;
    native.setEntityMaxSpeed(vehicle.scriptID, setSpeedLimit);
    vehicle.setMeta('speedLimit', speedLimit);
    
    let message = speedLimit !== null ? 'speed limit ~g~on' : 'speed limit ~r~off';
    native.beginTextCommandThefeedPost('STRING');
    native.addTextComponentSubstringPlayerName(message);
    native.endTextCommandThefeedPostTicker(false, true);
}