/**
 * nextcloud deck api
 * Title
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Label } from './label';
import { Attachement } from "@app/model/attachement";
import { User } from "@app/model/user";
import { Assignment } from "@app/model/assignment";


export interface Card {
    title?: string;
    description?: string;
    stackId?: number;
    type?: string;
    lastModified?: number;
    createdAt?: number;
    labels?: Array<Label>;
    assignedUsers?: Array<Assignment>;
    attachments?: Array<Attachement>;
    attachmentCount?: number;
    owner?: string;
    order?: number;
    archived?: boolean;
    duedate?: string;
    deletedAt?: number;
    commentsUnread?: number;
    id?: number;
    overdue?: number;
}

