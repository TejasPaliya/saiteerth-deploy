'use strict';

/**
 * reach service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reach.reach');
