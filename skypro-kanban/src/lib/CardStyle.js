export const CardStyle = (modifyCard, currentStatus, status) => {
    const isStatus = () => {
        return currentStatus === status;
    }

    return {
        display: modifyCard,
        background: isStatus() ? "#94A6BE" : "none",
        color: isStatus() ? "#FFFFFF" : "#94A6BE",
        cursor: "pointer",
    }
}