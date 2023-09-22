import pkg_resources
import os
import voyager.utils as U


# 加载 skill 的内容
def load_control_primitives_context(primitive_names=None):
    package_path = pkg_resources.resource_filename("voyager", "")
    # 如果没有传入 skill name，加载所有 skill 内容
    if primitive_names is None:
        primitive_names = [
            primitive[:-3]
            for primitive in os.listdir(f"{package_path}/control_primitives_context")
            if primitive.endswith(".js")
        ]
    # 根据传入的 skill name，加载对应 skill的上下文内容
    primitives = [
        U.load_text(f"{package_path}/control_primitives_context/{primitive_name}.js")
        for primitive_name in primitive_names
    ]
    return primitives
