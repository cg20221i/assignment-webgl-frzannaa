function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        // number 3
        0.0, 0.6, 0.4, 0.6, 0.1, 0.4, 0.4, 0.4, 0.4, 0.1, -0.0, 0.1,
        // number 0
        0.5, 0.6, 0.5, 0.1, 0.7, 0.1, 0.7, 0.6, 0.5, 0.6,
        // A LEFT
        -0.6, -0.2, //A
        -0.8, -0.8, //B
        -0.75, -0.8, //C
        -0.75, -0.8, //D
        -0.6, -0.35, //E
        -0.6, -0.2, //F

        // A RIGHT 
        -0.6, -0.2, //A
        -0.4, -0.8, //B
        -0.45, -0.8, //C
        -0.45, -0.8, //D
        -0.6, -0.35, //E
        -0.6, -0.2, //F

        // A MIDDLE (Right)
        -0.65, -0.5, //A
        -0.5, -0.6, //B
        -0.55, -0.5, //C

        // A MIDDLE (Left)
        -0.65, -0.5, //A
        -0.5, -0.6, //B
        -0.7, -0.6, //C


    ];

    //create a linked list for storing the vertices data in the GPU realm
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // VERTEX SHADER
    var vertexShaderCode = `
    attribute vec2 aPosition;
        void main () {
            gl_PointSize = 10.0;
            gl_Position = vec4(aPosition, 0.0, 1.0);
    }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            // Blue = R:0, G:0, B:1, A:1
            // gl_FragColor is the final destination for storing
            //  color data for the rendered fragment
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    // Comparing to C programming, we my imagine
    // that up to this step we have created two
    // object files (.o) for the vertex and fragment shader

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    //teach the GPU how to collect
    //the positional values from ARRAY_BUFFER
    //for each vertex being processed

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(1.0, 0.75, 0.79, 1.0);
    //R,G,B,Alpha

    gl.clear(gl.COLOR_BUFFER_BIT);

    // gl.drawArrays(gl.LINE_STRIP, 0, 14);
    gl.drawArrays(gl.LINE_STRIP, 0, 6);
    gl.drawArrays(gl.LINE_STRIP, 6, 5);
    gl.drawArrays(gl.TRIANGLES, 11, 6);
    gl.drawArrays(gl.TRIANGLES, 17, 6);
    gl.drawArrays(gl.TRIANGLES, 23, 3);
    gl.drawArrays(gl.TRIANGLES, 26, 3);
}