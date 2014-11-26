'use strict';

/**
 * @ngdoc service
 * @name gtdApp.Task
 * @description
 * # Task
 * Service in the gtdApp.
 */
angular.module('gtdApp')
  .service('Task', function Task($resource) {
 	return $resource('api/1.0/tasks/:id', {'id': '@id'}, {
		'read' : {
			'method' : 'GET',
			'isArray' : true
		},
		'create' : {
			'method' : 'POST',
			'isArray' : true
		},
		'createWithParent' : {
			'url' : 'api/1.0/projects/:parentId/tasks',
			'params' : { 'parentId' : '@parentId'},
			'method' : 'POST',
			'isArray' : true
		},
		'update' : {
			'method' : 'PUT',
			'isArray' : true
		},
		'remove' : {
			'method' : 'DELETE',
			'isArray' : true
		}
	});
  });
