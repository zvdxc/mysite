
if (typeof gdjs.evtsExt__ExtendedMath__Map !== "undefined") {
  gdjs.evtsExt__ExtendedMath__Map.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedMath__Map = {};


gdjs.evtsExt__ExtendedMath__Map.userFunc0x878fc0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const n = eventsFunctionContext.getArgument("n");
const min1 = eventsFunctionContext.getArgument("min1");
const max1 = eventsFunctionContext.getArgument("max1");
const min2 = eventsFunctionContext.getArgument("min2");
const max2 = eventsFunctionContext.getArgument("max2");

eventsFunctionContext.returnValue = (n - min1) * (max2 - min2) / (max1 - min1) + min2;
};
gdjs.evtsExt__ExtendedMath__Map.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedMath__Map.userFunc0x878fc0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ExtendedMath__Map.func = function(runtimeScene, n, min1, max1, min2, max2, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "n") return n;
if (argName === "min1") return min1;
if (argName === "max1") return max1;
if (argName === "min2") return min2;
if (argName === "max2") return max2;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ExtendedMath__Map.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ExtendedMath__Map.registeredGdjsCallbacks = [];