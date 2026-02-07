'use strict';

/**
 * eat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::eat.eat');
