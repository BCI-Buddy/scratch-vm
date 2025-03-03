const Cast = require('../util/cast');
const MathUtil = require('../util/math-util');
const Timer = require('../util/timer');

class Scratch3BCIBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * Retrieve the block primitives implemented by this package.
     * @return {object.<string, Function>} Mapping of opcode to Function.
     */
    getPrimitives () {
        return {
            connect_to_amp: this.connectToAmp,
        };
    }

    connectToAmp (args, util) {
        const steps = Cast.toNumber(args.STEPS);
        const radians = MathUtil.degToRad(90 - util.target.direction);
        const dx = steps * Math.cos(radians);
        const dy = steps * Math.sin(radians);

        //util.target.setXY(util.target.x - dx, util.target.y + dy);
        util.target.setXY(util.target.x + dx, util.target.y + dy);
   }

}

module.exports = Scratch3BCIBlocks;
