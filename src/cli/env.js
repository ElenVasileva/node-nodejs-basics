const parseEnv = () => {
    const prefix = 'RSS_';

    const values = [];
    for (const key in process.env) {
        if (key.startsWith(prefix))
            values.push(`${key}=${process.env[key]}`);
    }
    console.log(values.join('; '));
};

parseEnv();