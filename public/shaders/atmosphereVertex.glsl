varying vec3 vertexNormal;

void main() {
    vertexNormal = normalize(normalMatrix * normal);
    // gl_Position = [x, y, z, transform]
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
