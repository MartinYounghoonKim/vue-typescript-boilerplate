function numberFormat (target: string|number): string {
    const targetToNumber = Number(target);
    const setRegx = /\B(?=(\d{3})+(?!\d))/g;

    return isNaN(targetToNumber) ? '0' : targetToNumber.toString().replace(setRegx, ',');
}

export default numberFormat;
