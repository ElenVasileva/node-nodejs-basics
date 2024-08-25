const parseArgs = () => {

    const args = process.argv.slice(2,);
    const result = args.map(function (val, index, array) {
        return index % 2 === 0 ? val.slice(2) + ' is' : val + ',';
    });
    const output = result.join(' ');
    console.log(output.slice(0, output.length - 1));
};

parseArgs();