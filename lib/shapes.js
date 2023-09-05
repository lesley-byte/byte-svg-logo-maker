/**
 * Base Shape class that provides common properties and methods for all shapes.
 */
class Shape {
    constructor() {
        // Default properties for any shape
        this.color = "red";
        this.text = "ABC";
        this.textColor = "black";
    }

    /**
     * Set the color of the shape.
     * @param {string} color - A color keyword or hexadecimal value.
     */
    setColor(color) {
        this.color = color;
    }

    /**
     * Set the text of the shape.
     * @param {string} text - Text to be displayed on the shape.
     */
    setText(text) {
        this.text = text;
    }

    /**
     * Set the color of the text.
     * @param {string} textColor - A color keyword or hexadecimal value for the text.
     */
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    
    /**
     * Render the text for the shape.
     * @returns {string} SVG representation of the text.
     */
    renderText() {
        return `<text x="150" y="100" fill="${this.textColor}" text-anchor="middle" dominant-baseline="central">${this.text}</text>`;
    }
}

/**
 * Circle shape class. Extends the base Shape class.
 */
class Circle extends Shape {
    constructor() {
        super(); // Calls the constructor of the base Shape class
        this.radius = 50;
    }

    /**
     * Render the circle shape with its text.
     * @returns {string} SVG representation of the circle and its text.
     */
    render() {
        const baseShape = `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
        return `${baseShape}\n${this.renderText()}`;
    }
}

/**
 * Triangle shape class. Extends the base Shape class.
 */
class Triangle extends Shape {
    constructor() {
        super(); // Calls the constructor of the base Shape class
        this.points = "150, 18 244, 182 56, 182";
    }

    /**
     * Render the triangle shape with its text.
     * @returns {string} SVG representation of the triangle and its text.
     */
    render() {
        const baseShape = `<polygon points="${this.points}" fill="${this.color}" />`;
        return `${baseShape}\n${this.renderText()}`;
    }
}

/**
 * Square shape class. Extends the base Shape class.
 */
class Square extends Shape {
    constructor() {
        super(); // Calls the constructor of the base Shape class
        this.width = 100;
    }

    /**
     * Render the square shape with its text.
     * @returns {string} SVG representation of the square and its text.
     */
    render() {
        const baseShape = `<rect x="100" y="50" width="${this.width}" height="${this.width}" fill="${this.color}" />`;
        return `${baseShape}\n${this.renderText()}`;
    }
}

// Exporting the specific shape classes for external use.
module.exports = { Circle, Triangle, Square };
