
if (typeof gdjs.evtsExt__ExtendedMath__Lcm !== "undefined") {
  gdjs.evtsExt__ExtendedMath__Lcm.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedMath__Lcm = {};


gdjs.evtsExt__ExtendedMath__Lcm.userFunc0xc78a48 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function gcf(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

function lcm(a, b) {
    return Math.abs(a * b) / gcf(a, b);
}

const a = eventsFunctionContext.getArgument("a");
const b = eventsFunctionContext.getArgument("b");

if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
    eventsFunctionContext.returnValue = 0;
} 
else if (a === 0) {
    eventsFunctionContext.returnValue = b;
} 
else if (b === 0) {
    eventsFunctionContext.returnValue = a;
} else {
    eventsFunctionContext.returnValue = lcm(a, b);
}
};
gdjs.evtsExt__ExtendedMath__Lcm.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedMath__Lcm.userFunc0xc78a48(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ExtendedMath__Lcm.func = function(runtimeScene, a, b, parentEventsFunctionContext) {
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
if (argName === "a") return a;
if (argName === "b") return b;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ExtendedMath__Lcm.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ExtendedMath__Lcm.registeredGdjsCallbacks = [];