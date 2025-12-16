export const UserRolesEnum = {
    ADMIN:'admin',
    PROJECT_ADMIN:'project_admin',
    MEMBER:'member'
} // exporting normal object

export const AvailableUserRole = Object.values(UserRolesEnum); //exporting enumerable object means can be looped or iterable of only value

export const TaskStatusEnum = {
    TODO:"todo",
    IN_PROGRESS:'in_progress',
    DONE:'done'
};

export const AvailableTaskStatus = Object.values(TaskStatusEnum);

