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
import { Card } from './card';


export class Stack {
    title: string;
    boardId?: number;
    deletedAt?: string;
    cards?: Array<Card>;
    order?: number;
    id?: number;
}

