module.exports = {
    stories: ['../packages/**/src/*.stories.mdx', '../packages/**/src/*.stories.*', '../src/packages/**/*.stories.*'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
    webpackFinal: (webpackConfig) => {
        const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
            ({constructor}) => constructor && constructor.name === 'ModuleScopePlugin'
        );

        webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
        return webpackConfig;
    }
};
