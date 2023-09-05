const { Triangle } = require("./shapes.js");

test('Triangle shape should render correctly', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />\n' +
        '<text x="150" y="100" fill="black" text-anchor="middle" dominant-baseline="central">ABC</text>'
    );
});
