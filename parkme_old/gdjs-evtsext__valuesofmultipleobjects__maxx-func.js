
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__MaxX !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__MaxX.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__MaxX = {};
gdjs.evtsExt__ValuesOfMultipleObjects__MaxX.GDobjectsObjects1= [];


gdjs.evtsExt__ValuesOfMultipleObjects__MaxX.userFunc0xc45ae8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// If the instances doesn't exist we exit this function, returnValue will be 0
if (objects.length == 0) return;

let minX = objects[0].getAABB().max[0] || 0;

objects.forEach((object) => {

    let aabb = object.getAABB();
    
    if (aabb.max[0] > minX) {
        minX = aabb.max[0];
    }
})

eventsFunctionContext.returnValue = minX;
};
gdjs.evtsExt__ValuesOfMultipleObjects__MaxX.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("objects"), gdjs.evtsExt__ValuesOfMultipleObjects__MaxX.GDobjectsObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ValuesOfMultipleObjects__MaxX.GDobjectsObjects1);
gdjs.evtsExt__ValuesOfMultipleObjects__MaxX.userFunc0xc45ae8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__MaxX.func = function(runtimeScene, objects, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"objects": objects
},
  _objectArraysMap: {
"objects": gdjs.objectsListsToArray(objects)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ValuesOfMultipleObjects__MaxX.GDobjectsObjects1.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MaxX.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__MaxX.registeredGdjsCallbacks = [];