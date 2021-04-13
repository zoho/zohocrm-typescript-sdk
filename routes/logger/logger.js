"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Levels = exports.Logger = void 0;
/**
 * This class represents the Logger level and the file path.
 */
class Logger {
    constructor(level, filePath) {
        this.level = level;
        this.filePath = filePath;
    }
    /**
     * The method to get the logger level
     * @returns {String} A string representing the Log level.
     */
    getLevel() {
        return this.level;
    }
    /**
     * The method to get the logger filepath
     * @returns {String} A string representing the Log filepath
     */
    getFilePath() {
        return this.filePath;
    }
    /**
     * Creates an Logger class instance with the specified log level and file path.
     * @param {Levels} level A Levels class member containing log level.
     * @param {String} filePath A string containing absolute file path to write logs.
     */
    static getInstance(level, filePath) {
        return new Logger(level, filePath);
    }
}
exports.Logger = Logger;
/**
 * This class represents the possible logger levels
 */
class Levels {
}
exports.Levels = Levels;
Levels.INFO = 'info';
Levels.DEBUG = 'debug';
Levels.WARN = 'warn';
Levels.VERBOSE = 'verbose';
Levels.ERROR = 'error';
Levels.SILLY = 'silly';
Levels.OFF = 'off';
//# sourceMappingURL=logger.js.map