(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("untitled",
{ "compressionlevel":-1,
 "height":16,
 "infinite":false,
 "layers":[
        {
         "data":[23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 43, 43, 43, 43, 43, 81, 82, 83, 43, 43, 43, 43, 43, 43, 43, 81, 82, 83, 43,
            4, 5, 6, 7, 8, 9, 10, 7, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 13, 13, 13, 14, 83, 83, 4, 5, 6, 6, 7,
            24, 26, 26, 26, 26, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 31, 31, 31, 31, 31, 34, 1, 83, 24, 25, 26, 192, 192,
            129, 125, 46, 47, 48, 49, 50, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 50, 51, 52, 31, 34, 21, 18, 44, 45, 46, 49, 49,
            149, 125, 151, 152, 83, 83, 152, 82, 101, 152, 102, 102, 152, 43, 43, 152, 43, 82, 88, 71, 72, 31, 34, 41, 18, 84, 125, 66, 67, 43,
            169, 125, 171, 172, 9, 9, 9, 9, 9, 9, 7, 8, 9, 10, 11, 12, 13, 14, 88, 102, 72, 31, 34, 61, 56, 84, 125, 106, 83, 43,
            189, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 30, 31, 32, 125, 34, 88, 82, 72, 31, 34, 81, 56, 84, 125, 126, 83, 43,
            209, 210, 211, 212, 212, 210, 211, 212, 212, 212, 212, 212, 212, 50, 51, 52, 125, 54, 88, 82, 72, 31, 34, 81, 82, 84, 125, 146, 103, 83,
            82, 101, 102, 97, 4, 5, 6, 7, 12, 12, 13, 13, 14, 70, 71, 72, 125, 74, 88, 88, 72, 31, 34, 81, 82, 84, 125, 146, 103, 83,
            36, 37, 38, 18, 24, 25, 26, 27, 30, 31, 45, 33, 34, 101, 102, 72, 125, 94, 181, 182, 72, 29, 54, 221, 222, 84, 125, 146, 103, 103,
            55, 57, 58, 59, 64, 125, 46, 47, 50, 51, 52, 53, 54, 101, 63, 64, 125, 114, 201, 202, 72, 29, 74, 81, 83, 84, 125, 146, 102, 103,
            97, 97, 97, 97, 84, 125, 86, 102, 101, 71, 109, 73, 74, 101, 83, 84, 125, 114, 88, 82, 72, 29, 106, 101, 103, 104, 125, 146, 102, 103,
            97, 97, 97, 97, 104, 125, 106, 82, 101, 82, 129, 93, 94, 101, 103, 104, 125, 106, 107, 82, 72, 29, 171, 123, 123, 124, 125, 146, 103, 83,
            121, 122, 123, 123, 124, 125, 126, 82, 81, 81, 149, 113, 171, 172, 123, 124, 85, 126, 127, 82, 189, 190, 192, 192, 192, 192, 125, 146, 103, 103,
            125, 125, 125, 125, 125, 125, 146, 82, 82, 83, 189, 65, 65, 65, 65, 65, 85, 146, 147, 107, 209, 210, 164, 165, 163, 164, 165, 166, 83, 83,
            161, 162, 163, 164, 165, 165, 166, 82, 83, 83, 209, 211, 211, 211, 212, 213, 164, 166, 167, 103, 101, 102, 103, 103, 103, 103, 103, 103, 103, 103],
         "height":16,
         "id":1,
         "name":"map",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 20, 0, 0, 20, 0, 0, 20, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0,
            20, 0, 20, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0,
            20, 0, 20, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0],
         "height":16,
         "id":5,
         "name":"ToaDo",
         "opacity":1,
         "type":"tilelayer",
         "visible":false,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 58, 0, 0, 58, 0, 0, 58, 0, 0, 58, 0, 0, 58, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0,
            58, 0, 58, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0,
            58, 0, 58, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0],
         "height":16,
         "id":6,
         "name":"toado3",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":2,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.1",
 "tileheight":64,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/demo3\/gameMap.tsx"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.9",
 "width":30
});