export const getSagaActionName = actionType => actionType
    && actionType.split('_').slice(3).join('_');

export const getSagaActionType = actionType => actionType && actionType.split('_')[2];
